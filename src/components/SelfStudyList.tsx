import Searchbar from './Searchbar'

const SelfStudyList = () => {
  return (
    <div className="col-span-3 px-5 sm:px-10 md:px-16 2xl:px-36 py-20">
      <h2 className="text-2xl mb-5">학생 자습 관리</h2>
      <Searchbar placeholder="이름 입력" />
    </div>
  )
}

export default SelfStudyList
