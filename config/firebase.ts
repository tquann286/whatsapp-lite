import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA10vZ6TKJaI0Z844xaHAJsGUfeu4U9RUc',
  authDomain: 'whats-app-lite-adbe6.firebaseapp.com',
  projectId: 'whats-app-lite-adbe6',
  storageBucket: 'whats-app-lite-adbe6.appspot.com',
  messagingSenderId: '625751308095',
  appId: '1:625751308095:web:5a669d472677c9f34c458a',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
