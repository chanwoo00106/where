import GoogleLoginButton from './GoogleLoginButton'

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#EBECEF] px-20">
      <div className="flex-1">
        <h1 className="text-9xl font-thin text-gray-800 mb-10">Where</h1>

        <GoogleLoginButton />
      </div>

      <div className="flex-1">
        <img src="./security.png" alt="checklist" />
      </div>
    </div>
  )
}

export default LoginPage
