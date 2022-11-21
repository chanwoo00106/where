import { SelfStudyList, Sidebar } from '@components'

const Admin = () => {
  return (
    <div className="h-screen bg-[#141717] text-white grid grid-cols-4">
      <Sidebar />
      <SelfStudyList />
    </div>
  )
}

export default Admin
