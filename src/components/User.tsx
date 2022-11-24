import { app, toastOption } from '@common'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import type { DocumentReference, Timestamp } from 'firebase/firestore'
import type { UserDocType } from '@types'
import { toast } from 'react-toastify'

interface Props {
  excuse: string
  isChecked: boolean
  pos: string
  user: DocumentReference
  date: Timestamp
}

const User = ({ excuse, isChecked, pos, user, date }: Props) => {
  const [userDoc, setUserDoc] = useState<UserDocType>()

  useEffect(() => {
    ;(async () => {
      const refDoc = doc(app.db, 'users', user.id)
      const userDoc = await getDoc(refDoc)

      setUserDoc({
        name: userDoc.get('name'),
        class: userDoc.get('class'),
        grade: userDoc.get('grade'),
        num: userDoc.get('num'),
        picture: userDoc.get('picture')
      })
    })()
  }, [])

  const changeIsChecked = async (isChecked: boolean | null, msg: string) => {
    const now = new Date()
    await setDoc(
      doc(
        app.db,
        'self-study',
        `${user.id}-${now.getMonth() + 1}-${now.getDate()}`
      ),
      {
        excuse,
        pos,
        user,
        date,
        isChecked
      }
    )

    toast.info(`${msg} 되었습니다`, toastOption)
  }

  return (
    <div className="bg-[#E5EEEE] text-black flex items-center rounded-2xl py-6 px-4 justify-between">
      <div className="flex">
        <img
          className="h-14 rounded-full mr-5"
          src={userDoc?.picture}
          alt="user image"
        />

        <div>
          <h2>{userDoc?.name}</h2>
          <p>
            {userDoc?.grade}학년 {userDoc?.class}반 {userDoc?.num}번
          </p>
        </div>
      </div>

      <div>
        <h4>{pos}</h4>
        <p>{excuse}</p>
      </div>

      <div className="flex items-center gap-5 text-[#528273]">
        {isChecked === true && (
          <button onClick={() => changeIsChecked(null, '취소')}>
            허가 취소
          </button>
        )}

        {isChecked === null && (
          <>
            <button onClick={() => changeIsChecked(true, '허가')}>허가</button>
            <button onClick={() => changeIsChecked(false, '수정 요청')}>
              수정 요청
            </button>
          </>
        )}

        {isChecked === false && (
          <button onClick={() => changeIsChecked(null, '취소')}>
            수정요청 취소
          </button>
        )}
      </div>
    </div>
  )
}

export default User
