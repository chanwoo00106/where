import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  sub: string | null
  email: string | null
  picture: string | null
  name: string
  role?: 'student' | 'teacher'
}

const initialState: UserState = {
  sub: null,
  email: null,
  picture: null,
  name: ''
}

interface setUserType {
  sub: string
  email: string
  picture: string
  name: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<setUserType>) => {
      state = {
        ...action.payload,
        role: /s\d{5}@gsm.hs.kr/g.test(action.payload.email)
          ? 'student'
          : 'teacher'
      }
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
