"use client";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase-client";

type Unsubscribe = () => void;

export function watchCollection<T>(
  collectionName: string,
  onData: (items: T[]) => void,
  onError?: (message: string) => void,
): Unsubscribe {
  if (!db) {
    onData([]);
    return () => {};
  }

  const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));

  return onSnapshot(
    q,
    (snapshot) => {
      const docs = snapshot.docs.map((entry) => ({
        id: entry.id,
        ...(entry.data() as Omit<T, "id">),
      })) as T[];
      onData(docs);
    },
    (error) => {
      onError?.(error.message);
    },
  );
}

export async function createItem<T extends object>(
  collectionName: string,
  data: T,
): Promise<void> {
  if (!db) {
    throw new Error("Firebase not configured");
  }

  await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: Date.now(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateItem<T extends object>(
  collectionName: string,
  id: string,
  data: Partial<T>,
): Promise<void> {
  if (!db) {
    throw new Error("Firebase not configured");
  }

  await updateDoc(doc(db, collectionName, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteItem(
  collectionName: string,
  id: string,
): Promise<void> {
  if (!db) {
    throw new Error("Firebase not configured");
  }

  await deleteDoc(doc(db, collectionName, id));
}

export async function saveSettings<T extends object>(
  documentId: string,
  data: T,
): Promise<void> {
  if (!db) {
    throw new Error("Firebase not configured");
  }

  await setDoc(doc(db, "settings", documentId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function findBySlug<T>(
  collectionName: string,
  slug: string,
): Promise<T | null> {
  if (!db) {
    return null;
  }

  const q = query(collection(db, collectionName), where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const firstDoc = snapshot.docs[0];
  return {
    id: firstDoc.id,
    ...(firstDoc.data() as Omit<T, "id">),
  } as T;
}
