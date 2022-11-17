import { MainContent, UserInfo } from '@components'
import type { RootStates } from '@store'
import { useSelector } from 'react-redux'

const Main = () => {
  const { user } = useSelector((state: RootStates) => ({ user: state.user }))

  return (
    <div className="h-screen bg-[url('./background.jpg')] object-cover object-center bg-no-repeat bg-cover">
      {user.sub ? <UserInfo /> : <MainContent />}
    </div>
  )
}

export default Main
