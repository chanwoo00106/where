import { doc, setDoc } from 'firebase/firestore'
import { app } from '@common'
import { useForm } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import type { RootStates } from '@store'
import { setStudy } from '@store/selfStudy'

interface Inputs {
  pos: string
  excuse: string
}

const Add = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm<Inputs>()
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))

  const onCancel = () => navigate(-1)

  const onSubmit = (form: Inputs) => {
    const date = new Date()
    console.log(form)

    const self_study = doc(
      app.db,
      'self-study',
      `${user.sub}-${date.getMonth() + 1}-${date.getDate()}`
    )
    setDoc(self_study, {
      ...form,
      isChecked: null
    })

    dispatch(setStudy({ ...form, isChecked: null, date: date.toString() }))

    navigate('/')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-screen w-full bg-[#141717] text-[#FBFBFB] flex flex-col justify-center items-center"
    >
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

        <button type="submit" className="text-[#2BA77A]">
          확인
        </button>
      </div>

      <div className="max-w-3xl w-[80%] mb-24">
        <h2 className="text-xl font-normal mb-5">자습 위치 검색</h2>
        <div className="flex gap-2 items-center bg-[#8B8E8E] px-5 py-4 rounded-3xl shadow-lg shadow-white/20">
          <AiOutlineSearch color="4E4E55" size={25} />
          <input
            {...register('pos', { required: true })}
            className="text-base bg-[#8B8E8E] placeholder:text-[#4e4e55] outline-none text-[#4E4E55] w-full"
            placeholder="어디서 자습을 하실건가요?"
          />
        </div>
      </div>

      <div className="max-w-3xl w-[80%] text-xl font-normal">
        <h2 className="text-xl font-normal mb-5">자습 사유</h2>
        <textarea
          {...register('excuse', { required: true })}
          className="px-5 py-4 text-base bg-[#8B8E8E] placeholder:text-[#4e4e55] resize-none outline-none rounded-3xl shadow-lg shadow-white/20 w-full text-[#4e4e55]"
          placeholder="자습 사유를 입력해주세요."
        />
      </div>
    </form>
  )
}

export default Add
