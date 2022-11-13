import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="h-20 w-full px-20 flex items-center justify-between fixed top-0 left-0">
      <div
        onClick={() => navigate('/')}
        className="font-semibold text-3xl text-gray-600 cursor-pointer"
      >
        Where
      </div>

      <div>
        <button
          onClick={() => navigate('/login')}
          className="text-gray-700 border border-red-800 px-7 py-2 rounded-full hover:bg-red-800 hover:text-white transition"
        >
          Login
        </button>
      </div>
    </header>
  )
}

export default Header
