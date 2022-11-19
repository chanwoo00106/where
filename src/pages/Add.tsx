import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate = useNavigate()

  const onCancel = () => navigate(-1)

  return (
    <div className="h-screen w-full bg-[#141717] text-[#FBFBFB] flex flex-col justify-center items-center">
      <div className="flex justify-between max-w-3xl w-[80%] mb-14">
        <button onClick={onCancel} className="text-[#2BA77A]">
          취소
        </button>

        <div className="text-center">
          <h1 className="text-5xl font-semibold">Where.</h1>
          <p className="mt-1 text-lg font-extralight text-white">
            자습위치를 쉽게 관리하도록 만들어진 서비스입니다.
          </p>
        </div>

        <button className="text-[#2BA77A]">확인</button>
      </div>

      <div className="max-w-3xl w-[80%] mb-24">
        <h2 className="text-xl font-normal mb-5">자습 위치 검색</h2>
        <div className="flex gap-2 items-center bg-[#8B8E8E] px-5 py-4 rounded-3xl shadow-lg shadow-white/20">
          <AiOutlineSearch color="4E4E55" size={25} />
          <input
            className="text-base bg-[#8B8E8E] placeholder:text-[#4e4e55] outline-none text-[#4E4E55] w-full"
            placeholder="어디서 자습을 하실건가요?"
          />
        </div>
      </div>

      <div className="max-w-3xl w-[80%] text-xl font-normal">
        <h2 className="text-xl font-normal mb-5">자습 사유</h2>
        <textarea
          className="px-5 py-4 text-base bg-[#8B8E8E] placeholder:text-[#4e4e55] resize-none outline-none rounded-3xl shadow-lg shadow-white/20 w-full text-[#4e4e55]"
          placeholder="자습 사유를 입력해주세요."
        />
      </div>
    </div>
  )
}

export default Add
