import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './config';
import { REVIEWS } from '../data/servicesData';
import { ReviewItem } from '../types';

export interface EstimateRequestData {
  confirmationCode: string;
  service: string;
  fullName: string;
  phone: string;
  email?: string;
  address?: string;
  zipCode: string;
  preferredDate?: string;
  isUrgent: boolean;
  details?: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed';
  createdAt: string;
}

const ESTIMATES_COLLECTION = 'estimateRequests';
const REVIEWS_COLLECTION = 'customerReviews';

/**
 * Save an estimate request to Firestore
 */
export async function saveEstimateRequest(data: EstimateRequestData): Promise<string> {
  const docId = data.confirmationCode.toLowerCase().replace(/[^a-z0-9]/g, '-') || `req-${Date.now()}`;
  const docRef = doc(db, ESTIMATES_COLLECTION, docId);

  try {
    // Sanitize payload to omit undefined values
    const payload: Record<string, any> = {
      confirmationCode: data.confirmationCode,
      service: data.service,
      fullName: data.fullName,
      phone: data.phone,
      zipCode: data.zipCode,
      isUrgent: Boolean(data.isUrgent),
      status: data.status || 'pending',
      createdAt: data.createdAt,
    };

    if (data.email) payload.email = data.email;
    if (data.address) payload.address = data.address;
    if (data.preferredDate) payload.preferredDate = data.preferredDate;
    if (data.details) payload.details = data.details;

    await setDoc(docRef, payload);
    return docId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${ESTIMATES_COLLECTION}/${docId}`);
  }
}

/**
 * Fetch reviews from Firestore, with fallback and seeding of authentic testimonials
 */
export async function getCustomerReviews(): Promise<ReviewItem[]> {
  try {
    const q = query(collection(db, REVIEWS_COLLECTION), limit(20));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      // If Firestore collection is empty, seed initial verified reviews
      seedInitialReviews().catch((err) => console.warn('Could not seed initial reviews:', err));
      return REVIEWS;
    }

    const fetched: ReviewItem[] = [];
    snapshot.forEach((docSnap) => {
      const d = docSnap.data();
      fetched.push({
        id: docSnap.id,
        author: d.author || 'Homeowner',
        location: d.location || 'Central Florida',
        service: d.service || 'Screen Repair',
        rating: Number(d.rating) || 5,
        date: d.date || 'Recent',
        text: d.text || '',
        verified: Boolean(d.verified),
      });
    });

    return fetched.length > 0 ? fetched : REVIEWS;
  } catch (error) {
    console.warn('Falling back to local testimonials:', error);
    return REVIEWS;
  }
}

/**
 * Submit a customer review into Firestore
 */
export async function submitCustomerReview(review: Omit<ReviewItem, 'id'>): Promise<string> {
  const docId = `rev-${Date.now()}`;
  const docRef = doc(db, REVIEWS_COLLECTION, docId);

  try {
    const payload = {
      author: review.author,
      location: review.location,
      service: review.service,
      rating: review.rating,
      date: review.date || 'Just now',
      text: review.text,
      verified: Boolean(review.verified),
      createdAt: new Date().toISOString(),
    };

    await setDoc(docRef, payload);
    return docId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${REVIEWS_COLLECTION}/${docId}`);
  }
}

/**
 * Seeds initial verified testimonials into Firestore
 */
async function seedInitialReviews(): Promise<void> {
  try {
    for (const r of REVIEWS) {
      const docRef = doc(db, REVIEWS_COLLECTION, r.id);
      await setDoc(docRef, {
        author: r.author,
        location: r.location,
        service: r.service,
        rating: r.rating,
        date: r.date,
        text: r.text,
        verified: r.verified,
        createdAt: new Date().toISOString(),
      });
    }
  } catch {
    // non-fatal
  }
}
