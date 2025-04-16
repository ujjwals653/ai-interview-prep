import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'

const initFirebaseAdmin = () => {
  const apps = getApps();

  // This is to check if the app is not already initialized
  // So as to not create duplicates
  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      })
    })
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  }
}

export const { auth, db } = initFirebaseAdmin();