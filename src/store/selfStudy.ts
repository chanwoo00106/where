import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelfStudyState {
  pos: string
  excuse: string
  date: Date | null
}

const initialState: SelfStudyState = {
  pos: '',
  excuse: '',
  date: null
}

export const selfStudySlice = createSlice({
  name: 'selfStudy',
  initialState,
  reducers: {
    setStudy: (state, action: PayloadAction<SelfStudyState>) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { setStudy } = selfStudySlice.actions

export default selfStudySlice.reducer
