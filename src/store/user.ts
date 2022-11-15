import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  sub: string | null
  email: string | null
  picture: string | null
  name: string
}

const initialState: UserState = {
  sub: null,
  email: null,
  picture: null,
  name: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = {
        ...action.payload
      }
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
