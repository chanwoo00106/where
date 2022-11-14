import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  uid: string | null
  email: string | null
  photoURL: string | null
}

const initialState: UserState = {
  uid: null,
  email: null,
  photoURL: null
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
