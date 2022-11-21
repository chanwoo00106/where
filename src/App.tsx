import { Route, Routes } from 'react-router-dom'
import { Add, Admin, Main } from '@pages'
import { UserInfoInit } from '@hooks'

const App = () => {
  UserInfoInit()

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
