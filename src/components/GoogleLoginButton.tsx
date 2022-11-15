import { env } from '@common'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/user'

import type { CredentialResponse } from '@react-oauth/google'
import type { TokenIdType } from '@types'

const GoogleLoginButton = () => {
  const dispatch = useDispatch()
  const onSuccess = (res: CredentialResponse) => {
    if (!res.credential) return

    const { name, email, picture, sub } = jwtDecode<TokenIdType>(res.credential)
    dispatch(setUser({ email, picture, name, sub }))
  }

  return (
    <GoogleOAuthProvider clientId={env.VITE_CLIENT_ID}>
      <GoogleLogin onSuccess={onSuccess} theme="outline" width="400px" />
    </GoogleOAuthProvider>
  )
}

export default GoogleLoginButton
