import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  sub?: string
  email?: string
  picture?: string
  name: string
  role?: 'student' | 'teacher'
  grade?: number
  class?: number
  num?: number
}

const initialState: UserState = {
  sub: undefined,
  email: undefined,
  picture: undefined,
  name: '',
  grade: undefined,
  class: undefined,
  num: undefined
}

interface setUserType {
  sub: string
  email: string
  picture: string
  name: string
  role: 'student' | 'teacher'
  grade?: number
  class?: number
  num?: number
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<setUserType>) => {
      return {
        ...state,
        ...action.payload
      }
    },
    clearUser: () => {
      return {
        sub: undefined,
        email: undefined,
        picture: undefined,
        name: '',
        grade: undefined,
        class: undefined,
        num: undefined
      }
    }
  }
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
