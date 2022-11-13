import { FcGoogle } from 'react-icons/fc'
import {
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  deleteUser,
  getAuth
} from 'firebase/auth'
import { app } from '@common'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const auth = getAuth(app)

  const onLogin = async () => {
    const provider = new GoogleAuthProvider()

    provider.addScope('https://www.googleapis.com/auth/userinfo.profile')

    await signInWithRedirect(auth, provider)
  }

  getRedirectResult(auth).then(result => {
    if (!result) return
    if (!result.user.email?.includes('@gsm.hs.kr') && auth.currentUser) {
      deleteUser(auth.currentUser)
      return
    }

    GoogleAuthProvider.credentialFromResult(result)
  })

  auth.onAuthStateChanged(user => {
    if (!user) return
    navigate('/')
  })

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#EBECEF] px-20">
      <div className="flex-1">
        <h1 className="text-9xl font-thin text-gray-800 mb-10">Where</h1>
        <button
          onClick={onLogin}
          className="bg-white text-gray-600 px-20 py-3 rounded-md flex items-center gap-2"
        >
          <FcGoogle size={30} />
          구글로 로그인하기
        </button>
      </div>

      <div className="flex-1">
        <img src="./security.png" alt="checklist" />
      </div>
    </div>
  )
}

export default LoginPage
