import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { app } from '@common'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setStudy } from '@store/selfStudy'
import { location } from '@lib'
import { Searchbar } from '@components'

import type { RootStates } from '@store'

interface Inputs {
  pos: string
  excuse: string
}

const Add = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue, watch } = useForm<Inputs>()
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))

  const onCancel = () => navigate(-1)

  const onChoice = (location: string) => setValue('pos', location)

  const onSubmit = (form: Inputs) => {
    const date = new Date()

    const self_study = doc(
      app.db,
      'self-study',
      `${user.sub}-${date.getMonth() + 1}-${date.getDate()}`
    )
    setDoc(self_study, {
      ...form,
      isChecked: null,
      date: Timestamp.now(),
      user: doc(app.db, `users/${user.sub}`)
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

      <div className="max-w-3xl w-[80%] h-80">
        <h2 className="text-xl font-normal mb-5">자습 위치 검색</h2>
        <Searchbar
          {...register('pos', { required: true })}
          placeholder="어디서 자습을 하실건가요?"
        />

        <div>
          {location
            .filter(i => {
              if (watch('pos') === '') return false
              if (i.location.includes(watch('pos'))) return true
            })
            .slice(0, 2)
            .map(i => (
              <div
                className="flex justify-between px-10 py-5 border-b border-[#333333]"
                key={i.id}
              >
                <div className="flex space-x-10">
                  <p>{i.location}</p>
                  <p>{i.description}</p>
                </div>
                <button
                  onClick={() => onChoice(i.location)}
                  className="text-[#2BA77A]"
                >
                  선택
                </button>
              </div>
            ))}
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
