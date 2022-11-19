import { Route, Routes } from 'react-router-dom'
import { Add, Main } from '@pages'
import { UserInfoInit } from '@hooks'

const App = () => {
  UserInfoInit()

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  )
}

export default App
