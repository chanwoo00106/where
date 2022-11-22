import { useState } from 'react'
import Searchbar from './Searchbar'
import UserList from './UserList'

const SelfStudyList = () => {
  const [class_, setClass] = useState<number>(1)

  return (
    <div className="col-span-3 px-5 sm:px-10 md:px-16 2xl:px-36 py-20">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl">학생 자습 관리</h2>
        <select
          onChange={e => setClass(+e.target.value)}
          className="bg-transparent text-white mr-5 outline-none"
        >
          <option value={1}>1반</option>
          <option value={2}>2반</option>
          <option value={3}>3반</option>
          <option value={4}>4반</option>
        </select>
      </div>
      <Searchbar placeholder="이름 입력" />
      <UserList />
    </div>
  )
}

export default SelfStudyList
