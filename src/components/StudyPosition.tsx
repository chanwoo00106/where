import { BsCheckCircleFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { RootStates } from '@store'

const StudyPosition = () => {
  const navigate = useNavigate()
  const { selfStudy } = useSelector((state: RootStates) => ({
    selfStudy: state.selfStudy
  }))

  return (
    <div>
      <div className="bg-[#E5EEEE] max-w-3xl px-10 py-8 rounded-xl flex justify-between items-center">
        <div>
          <h4 className="font-semibold">
            {selfStudy.pos
              ? selfStudy.pos
              : '현재 자습위치가 등록 되어있지 않아요..'}
          </h4>
          <p className="text-gray-600 text-sm">
            {selfStudy.excuse
              ? selfStudy.excuse
              : '선생님들이 여러분의 위치를 알 수 있게 현재 위치를 등록해주세요.'}
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate('/add')}
            className="text-[#528273] font-semibold"
          >
            {selfStudy.isChecked === null && !selfStudy.pos && '등록'}
            {selfStudy.isChecked === null && selfStudy.pos && '변경'}
            {selfStudy.isChecked === false && '변경'}
          </button>
        </div>
      </div>

      <div className="flex items-center">
        {selfStudy.isChecked === true && <BsCheckCircleFill color="#528273" />}
        <p className="text-[#CAC0C0] pl-2 mt-1">
          {selfStudy.isChecked === false &&
            '사유 부족으로 수정 요청이 들어왔습니다.'}

          {selfStudy.isChecked === true && '허가되었습니다.'}

          {selfStudy.isChecked == null && selfStudy.pos && '대기중입니다'}
        </p>
      </div>
    </div>
  )
}

export default StudyPosition
