import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { AddBooks, deleteABook, getAllBooks } from '../api/Books';


type BookData = {
  book:{
    id: string;
    title: string;
    isbn: string;
    author: string;
    published: string;
    cover : string;
  }
}

type Book ={
  data: BookData[]
}

type BooksState = {
  list?: Book;
  loading: boolean;
  error: string | null;
}

export const fetchBooks = createAsyncThunk<Book, undefined, {rejectValue: string}>(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
      const response = await getAllBooks();

      if (!response) {
        return rejectWithValue('Server Error!');
      }

      const data = await response.data;

      return data;
    }
);


export const addNewBooks = createAsyncThunk<Book, { isbn:string}, { rejectValue: string }>(
    'books/addNewBooks',
    async function ({isbn}, { rejectWithValue }) {
  
        const response = await AddBooks(isbn)
  
        if (!response) {
          return rejectWithValue('Can\'t add task. Server error.');
        }
        const data = response.data
        return data
    }
);

export const deleteBooks = createAsyncThunk<Book, { id:string}, { rejectValue: string }>(
  'books/deleteBooks',
  async function ({id}, { rejectWithValue }) {

    const response = await deleteABook(id)
    
    if (!response) {
      return rejectWithValue('Can\'t add task. Server error.');
    }

    return response
  }
);

export const deleteBook = createAsyncThunk<string, string, { rejectValue: string }>(
  'todos/deleteTodo',
  async function (id, { rejectWithValue }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      return rejectWithValue('Can\'t delete task. Server error.');
    }

    return id;
  }
);

const initialState: BooksState = {
  loading: false,
  error: null,
}

const BookSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        if(state.list?.data){
          state.list.data = state.list.data.filter(todo => todo.book.id !== action.payload)
        }
      })
  }
});

// export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default BookSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}