"use client";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase-client";

export async function uploadImage(file: File, folder: string): Promise<string> {
  if (!storage) {
    throw new Error("Firebase storage not configured");
  }

  const safeName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const storageRef = ref(storage, `${folder}/${safeName}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
