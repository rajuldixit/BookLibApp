import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './Books/bookSlice'

const store = configureStore({
  reducer: {
    book: bookSlice
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch