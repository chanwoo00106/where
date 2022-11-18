import { useSelector } from 'react-redux'
import UserInfo from './UserInfo'
import StudyPosition from './StudyPosition'
import GoogleLoginButton from './GoogleLoginButton'

import type { RootStates } from '@store'

const MainContent = () => {
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
          <GoogleLoginButton />
        )}
      </div>
    </div>
  )
}

export default MainContent
