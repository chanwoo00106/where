import { MainContent } from '@components'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { RootStates } from '@store'

const Main = () => {
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))
  const navigate = useNavigate()

  useEffect(() => {
    if (user.role === 'teacher') navigate('/admin')
  }, [])
  return (
    <div className="h-screen bg-[url('./background.jpg')] object-cover object-center bg-no-repeat bg-cover">
      <MainContent />
    </div>
  )
}

export default Main
