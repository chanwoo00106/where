import type { ENV } from '@types'

const env: Record<ENV, string> = import.meta.env as Record<ENV | string, string>

if (
  !env.VITE_API_KEY ||
  !env.VITE_APP_ID ||
  !env.VITE_PROJECT_ID ||
  !env.VITE_AUTH_DOMAIN ||
  !env.VITE_MEASUREMENT_ID ||
  !env.VITE_STORAGE_BUCKET ||
  !env.VITE_MESSAGING_SENDER_ID ||
  !env.VITE_CLIENT_ID
)
  new Error('Not Found env')

export default env
