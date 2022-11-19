import userReducer from './user'
import selfStudyReducer from './selfStudy'
import { configureStore } from '@reduxjs/toolkit'

import type { UserState } from './user'
import type { SelfStudyState } from './selfStudy'

export interface RootStates {
  user: UserState
  selfStudy: SelfStudyState
}

const store = configureStore({
  reducer: {
    user: userReducer,
    selfStudy: selfStudyReducer
  }
})

export default store
