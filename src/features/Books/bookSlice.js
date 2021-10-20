import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createbook } from './bookAPI';

const initialState = {
    craetebookstatus: ''
};

export const creatbook = createAsyncThunk(
    'book/create',
    async (data) => {
        const response = await createbook(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(creatbook.pending, (state) => {
                state.craetebookstatus = 'loading'

            })
            .addCase(creatbook.fulfilled, (state, action) => {
                state.craetebookstatus = 'success'
                console.log(action.payload);
            })
            .addCase(creatbook.rejected, (state, action) => {
                state.craetebookstatus = 'failure'

            });
    },
});

export const { } = bookSlice.actions;

export const selectcreatebook = (state) => state.books.craetebookstatus;

export default bookSlice.reducer;