import React from 'react'
import { app } from '@common'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { User } from '@components'
import { useSearchParams } from 'react-router-dom'

import type { DocumentData, QuerySnapshot } from 'firebase/firestore'

interface Props {
  class_: number
}

const UserList = ({ class_ }: Props) => {
  const [data, setData] = useState<QuerySnapshot<DocumentData>>()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    ;(async () => {
      const q = query(
        collection(app.db, 'self-study'),
        where('date', '>=', date),
        where('class', '==', class_),
        where('grade', '==', +`${searchParams.get('grade')}`)
      )

      onSnapshot(q, querySnapshot => {
        setData(querySnapshot)
      })
    })()
  }, [searchParams, class_])

  return (
    <div className="mt-10">
      {data?.docs.map(i => (
        <User
          key={i.id}
          isChecked={i.get('isChecked')}
          excuse={i.get('excuse')}
          pos={i.get('pos')}
          user={i.get('user')}
          date={i.get('date')}
        />
      ))}
    </div>
  )
}

export default React.memo(UserList)
