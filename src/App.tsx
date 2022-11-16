import { Route, Routes } from 'react-router-dom'
import { Main, Login } from '@pages'
import { UserInfoInit } from '@hooks'

const App = () => {
  UserInfoInit()

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
