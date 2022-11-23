import { app } from '@common'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import type { DocumentReference } from 'firebase/firestore'
import type { UserDocType } from '@types'

interface Props {
  excuse: string
  isChecked: string
  pos: string
  user: DocumentReference
}

const User = ({ excuse, isChecked, pos, user }: Props) => {
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

  return (
    <div>
      <img src={userDoc?.picture} alt="user image" />

      <div>
        <h2>{userDoc?.name}</h2>
        <p>
          {userDoc?.grade}학년 {userDoc?.class}반 {userDoc?.num}번
        </p>
      </div>

      <div>
        <h4>{pos}</h4>
        <p>{excuse}</p>
      </div>

      <div>
        <button>{isChecked ? '' : '수정 요청'}</button>
      </div>
    </div>
  )
}

export default User
