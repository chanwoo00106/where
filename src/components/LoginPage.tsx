import { FcGoogle } from 'react-icons/fc'
import {
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult
} from 'firebase/auth'
import { app } from '@common'

const LoginPage = () => {
  const onLogin = async () => {
    const provider = new GoogleAuthProvider()

    await signInWithRedirect(app.auth, provider)
  }

  getRedirectResult(app.auth)
    .then(result => {
      if (!result) return

      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken

      // The signed-in user info.
      const user = result?.user

      console.log(user)
      console.log(token)
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
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
