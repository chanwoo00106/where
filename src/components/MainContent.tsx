import { SlArrowRight } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const MainContent = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen flex items-center px-32 ">
      <div className="">
        <h1 className="text-5xl text-white font-semibold">Where.</h1>
        <p className="mt-1 text-lg font-medium text-white">
          자습위치를 쉽게 관리하도록 만들어진 서비스입니다.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="mt-12 font-light text-white border border-white pl-5 pr-3 py-2.5 flex items-center gap-2 rounded-full hover:bg-white hover:text-gray-700 transition"
        >
          로그인하기 <SlArrowRight />
        </button>
      </div>
    </div>
  )
}

export default MainContent
