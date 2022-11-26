import { SelfStudyList, Sidebar } from '@components'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import type { RootStates } from '@store'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))

  useEffect(() => {
    if (user.role === 'student') navigate('/')
  }, [])

  return (
    <div className="h-screen bg-[#141717] text-white grid grid-cols-4">
      <Sidebar />
      <SelfStudyList />
    </div>
  )
}

export default Admin
