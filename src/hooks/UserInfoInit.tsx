import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { app, storage } from '@common'
import jwtDecode from 'jwt-decode'
import { doc, getDoc } from 'firebase/firestore'

import type { RootStates } from '@store'
import type { TokenIdType } from '@types'
import { setUser } from '@store/user'

const UserInfoInit = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootStates) => ({
    user: state.user
  }))

  useEffect(() => {
    ;(async () => {
      if (user.sub) return

      const token = storage.getStorage('token')
      if (!token) return

      const { name, email, picture, sub } = jwtDecode<TokenIdType>(token)
      if (!name || !email || !picture || !sub) return

      const userDoc = doc(app.db, 'users', sub)
      const result = await getDoc(userDoc)
      if (email !== result.get('email')) return

      if (result.get('role') === 'student')
        dispatch(
          setUser({
            name,
            email,
            picture,
            sub,
            role: 'student',
            grade: result.get('grade'),
            class: result.get('class'),
            num: result.get('num')
          })
        )
      else
        dispatch(
          setUser({
            name,
            email,
            picture,
            sub,
            role: 'teacher'
          })
        )
    })()
  }, [])
}

export default UserInfoInit
