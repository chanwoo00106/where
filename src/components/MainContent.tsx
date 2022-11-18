import { SlArrowRight } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { RootStates } from '@store'
import UserInfo from './UserInfo'
import StudyPosition from './StudyPosition'

const MainContent = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))

  return (
    <div className="h-screen flex items-center px-32">
      <div className="flex-1">
        <div className="mb-28">
          <h1 className="text-5xl text-white font-semibold">Where.</h1>
          <p className="mt-1 text-lg font-extralight text-white">
            자습위치를 쉽게 관리하도록 만들어진 서비스입니다.
          </p>
        </div>

        {user.sub ? (
          <div className="flex flex-col gap-10">
            <UserInfo />
            <StudyPosition />
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="mt-12 font-light text-white border border-white pl-5 pr-3 py-2.5 flex items-center gap-2 rounded-full hover:bg-white hover:text-gray-700 transition"
          >
            로그인하기 <SlArrowRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default MainContent
