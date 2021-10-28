import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/userSlice';
import booksReducers from '../features/Books/bookSlice';
import categoriesReducers from '../features/categories/categoriesSlice';
import languagesReducers from '../features/Languages/languagesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    books: booksReducers,
    categories:categoriesReducers,
    languages:languagesReducers
  },
});
