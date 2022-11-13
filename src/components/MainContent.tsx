import { app } from '@common'
import { getAuth } from 'firebase/auth'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const MainContent = () => {
  const navigate = useNavigate()
  const auth = getAuth(app)

  console.log(auth)

  return (
    <div className="h-screen flex items-center px-20">
      <div className="flex-1">
        <h1 className="text-9xl font-thin text-gray-800">Where</h1>
        <p className="px-5 my-10 text-xl text-gray-400">
          자습위치를 쉽게 관리하도록 만들어진 서비스입니다.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="text-gray-700 px-5 py-3 flex items-center space-x-1 rounded-full hover:bg-red-800 hover:text-white transition"
        >
          로그인하기 <AiOutlineArrowRight />
        </button>
      </div>

      <div className="flex-1">
        <img src="./checklist.png" alt="checklist" />
      </div>
    </div>
  )
}

export default MainContent
