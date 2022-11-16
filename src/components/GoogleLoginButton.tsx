import { env, storage, toastOption, app, checkStudent } from '@common'
import { doc, setDoc } from 'firebase/firestore'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/user'
import { toast, ToastContainer } from 'react-toastify'

import type { CredentialResponse } from '@react-oauth/google'
import type { TokenIdType } from '@types'

import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const GoogleLoginButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSuccess = async (res: CredentialResponse) => {
    if (!res.credential) return toast.warn('로그인 실패')

    const { name, email, picture, sub } = jwtDecode<TokenIdType>(res.credential)

    if (!email.includes('@gsm.hs.kr'))
      return toast.warn('gsm 계정으로 로그인 해주세요', toastOption)

    const user = doc(app.db, 'users', sub)
    await setDoc(user, {
      email,
      picture,
      name,
      role: checkStudent(email),
      token: res.credential
    })

    storage.saveStorage('token', res.credential)

    dispatch(setUser({ email, picture, name, sub }))
    toast.success('로그인 성공', toastOption)
    navigate('/')
  }

  return (
    <>
      <GoogleOAuthProvider clientId={env.VITE_CLIENT_ID}>
        <GoogleLogin onSuccess={onSuccess} theme="outline" width="400px" />
      </GoogleOAuthProvider>
      <ToastContainer />
    </>
  )
}

export default GoogleLoginButton
