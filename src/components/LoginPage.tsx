import { FcGoogle } from 'react-icons/fc'

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#EBECEF] px-20">
      <div className="flex-1">
        <h1 className="text-9xl font-thin text-gray-800 mb-10">Where</h1>
        <button className="bg-white px-20 py-3 rounded-md flex items-center gap-2">
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
