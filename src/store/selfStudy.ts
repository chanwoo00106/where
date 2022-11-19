import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelfStudyState {
  pos: string
  excuse: string
  isChecked: boolean | null
  date?: string
}

const initialState: SelfStudyState = {
  pos: '',
  excuse: '',
  isChecked: null
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
