import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

type Book = {
    id: number
    name: string
  }
  type InitialState = {
    loading: boolean
    books: Book[]
    error: string
  }
  const initialState: InitialState = {
    loading: false,
    books: [],
    error: ''
  }

const fetchBooks = createAsyncThunk('', () => {
    return axios.get('').then((response) => response.data )   
})

const bookSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchBooks.pending, state => {
        state.loading = true
      })
      builder.addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<Book[]>) => {
          state.loading = false
          state.books = action.payload
          state.error = ''
        }
      )
      builder.addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false
        state.books = []
        state.error = action.error.message || 'Something went wrong'
      })
    }
  })

  export default bookSlice.reducer