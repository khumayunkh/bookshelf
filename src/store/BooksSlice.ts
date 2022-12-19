import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { getAllBooks } from '../api/Books';

type Book = {
  id: string;
  title: string;
  isbn: string;
  author: string;
  publishd: string;
  cover : string
}

type BooksState = {
  list: Book[];
  loading: boolean;
  error: string | null;
}
export const fetchBooks = createAsyncThunk<Book[], undefined, {rejectValue: string}>(
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


// export const toggleStatus = createAsyncThunk<Todo, string, { rejectValue: string, state: { todos: TodosState} }>(
//   'book/toggleStatus',
//   async function (id, { rejectWithValue, getState }) {
//     const todo = getState().todos.list.find(todo => todo.id === id);

//     if (todo) {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           completed: !todo.completed,
//         })
//       });
  
//       if (!response.ok) {
//         return rejectWithValue('Can\'t toggle status. Server error.');
//       }
  
//       return (await response.json()) as Todo; 
//     }

//     return rejectWithValue('No such todo in the list!')
//   }
// );

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
  list: [],
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
    //   .addCase(addNewTodo.pending, (state) => {
    //     state.error = null;
    //   })
    //   .addCase(addNewTodo.fulfilled, (state, action) => {
    //     state.list.push(action.payload);
    //   })
    //   .addCase(toggleStatus.fulfilled, (state, action) => {
    //     const toggledTodo = state.list.find(todo => todo.id === action.payload.id);
    //     if (toggledTodo) {
    //       toggledTodo.completed = !toggledTodo.completed;
    //     }
    //   })
    //   .addCase(deleteTodo.fulfilled, (state, action) => {
    //     state.list = state.list.filter(todo => todo.id !== action.payload);
    //   })
    //   .addMatcher(isError, (state, action: PayloadAction<string>) => {
    //     state.error = action.payload;
    //     state.loading = false;
    //   });
  }
});

// export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default BookSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}