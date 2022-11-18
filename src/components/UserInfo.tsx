import { SlArrowRight } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { storage } from '@common'

import type { RootStates } from '@store'
import { clearUser } from '@store/user'

const UserInfo = () => {
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))
  const dispatch = useDispatch()

  const onLogout = () => {
    storage.clearStorage()
    dispatch(clearUser())
  }

  return (
    <div className="flex justify-between items-center max-w-3xl">
      <div className="flex gap-8 items-center">
        <img
          className="object-cover bg-center rounded-full h-24"
          src={user.picture}
        />

        <div>
          <h1 className="text-white font-bold text-4xl">{user.name}</h1>
          <p className="text-white font-light text-sm pt-1">
            {user.grade}학년 {user.class}반 {user.num}번
          </p>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="font-light text-sm text-white border border-white pl-5 pr-3 py-2.5 flex items-center gap-2 rounded-full hover:bg-white hover:text-gray-700 transition"
      >
        로그아웃 <SlArrowRight />
      </button>
    </div>
  )
}

export default UserInfo
