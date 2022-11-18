import { Route, Routes } from 'react-router-dom'
import { Main } from '@pages'
import { UserInfoInit } from '@hooks'

const App = () => {
  UserInfoInit()

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default App
