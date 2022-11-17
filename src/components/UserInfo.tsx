import type { RootStates } from '@store'
import { SlArrowRight } from 'react-icons/sl'
import { useSelector } from 'react-redux'

const UserInfo = () => {
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))
  return (
    <div className="h-full flex flex-col">
      <div className="backdrop-blur-lg py-16 flex justify-around items-center">
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

        <button className="font-light text-white border border-white pl-5 pr-3 py-2.5 flex items-center gap-2 rounded-full hover:bg-white hover:text-gray-700 transition">
          로그아웃 <SlArrowRight />
        </button>
      </div>

      <div className="bg-[#141717] flex-1"></div>
    </div>
  )
}

export default UserInfo
