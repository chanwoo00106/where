import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  uid: string
  email: string
  photoURL: string
}

const initialState: UserState = {
  uid: '',
  email: '',
  photoURL: ''
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
