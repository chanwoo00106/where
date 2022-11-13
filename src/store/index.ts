import userReducer from './user'
import type { UserState } from './user'
import { configureStore } from '@reduxjs/toolkit'

export interface RootStates {
  user: UserState
}

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store
