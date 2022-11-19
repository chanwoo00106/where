import { useNavigate } from 'react-router-dom'

const StudyPosition = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#E5EEEE] max-w-3xl px-10 py-8 rounded-xl flex justify-between items-center">
      <div>
        <h4 className="font-semibold">
          현재 자습위치가 등록 되어있지 않아요..
        </h4>
        <p className="text-gray-600 text-sm">
          선생님들이 여러분의 위치를 알 수 있게 현재 위치를 등록해주세요.
        </p>
      </div>

      <div>
        <button
          onClick={() => navigate('/add')}
          className="text-[#528273] font-semibold"
        >
          등록
        </button>
      </div>
    </div>
  )
}

export default StudyPosition
