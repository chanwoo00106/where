import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { RootStates } from '@store'
import { clearUser } from '@store/user'
import { storage } from '@common'

const Header = () => {
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(clearUser())
    storage.clearStorage()
  }

  return (
    <header className="h-20 w-full px-20 flex items-center justify-between fixed top-0 left-0">
      <div
        onClick={() => navigate('/')}
        className="font-semibold text-3xl text-gray-600 cursor-pointer"
      >
        Where
      </div>

      <div>
        {user.sub ? (
          <button
            onClick={onLogout}
            className="text-gray-700 border border-red-800 px-7 py-2 rounded-full hover:bg-red-800 hover:text-white transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="text-gray-700 border border-red-800 px-7 py-2 rounded-full hover:bg-red-800 hover:text-white transition"
          >
            Login
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
