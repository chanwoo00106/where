import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'query-string'
import { storage } from '@common'
import { useDispatch } from 'react-redux'
import { clearUser } from '@store/user'

const Sidebar = () => {
  const { search } = useLocation()
  const { grade } = qs.parse(search)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClick = (grade: number) => navigate({ search: `?grade=${grade}` })

  const onLogout = () => {
    storage.clearStorage()
    dispatch(clearUser())
    navigate('/')
  }

  return (
    <div className="px-16 py-16 text-xl flex flex-col justify-between items-start">
      <div className="flex flex-col space-y-8">
        <button
          onClick={() => navigate('/admin')}
          className={`${grade !== undefined && 'opacity-50'} transition`}
        >
          1학년
        </button>
        <button
          onClick={() => onClick(2)}
          className={`${grade !== '2' && 'opacity-50'} transition`}
        >
          2학년
        </button>
        <button
          onClick={() => onClick(3)}
          className={`${grade !== '3' && 'opacity-50'} transition`}
        >
          3학년
        </button>
      </div>

      <button onClick={onLogout} className="text-base">
        로그아웃
      </button>
    </div>
  )
}

export default Sidebar
