import { app } from '@common'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { User } from '@components'

import type { DocumentData, QuerySnapshot } from 'firebase/firestore'

const UserList = () => {
  const [data, setData] = useState<QuerySnapshot<DocumentData>>()
  useEffect(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    ;(async () => {
      const q = query(
        collection(app.db, 'self-study'),
        where('date', '>=', date)
      )

      const a = await getDocs(q)

      setData(a)
    })()
  }, [])
  return (
    <div>
      {data?.docs.map(i => (
        <User
          key={i.id}
          isChecked={i.get('isChecked')}
          excuse={i.get('excuse')}
          pos={i.get('pos')}
          user={i.get('user')}
        />
      ))}
    </div>
  )
}

export default UserList
