import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { env } from '@common'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: env.VITE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_ID,
  measurementId: env.VITE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const analytics = getAnalytics(app)
logEvent(analytics, 'notification_received')

export default { auth }
