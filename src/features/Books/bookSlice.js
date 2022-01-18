import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createbook, getallBooks } from './bookAPI';

const initialState = {
    craetebookstatus: '',
    bookListstatus: [],
    singleBook: null,


};

export const getallbook = createAsyncThunk(
    'book/getallbooks',
    async () => {
        const response = await getallBooks();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const creatbook = createAsyncThunk(
    'book/create',
    async (data) => {
        const response = await createbook(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getbookById: (state, action) => {
            console.log(action);
            console.log("payload here", action.payload)
            for (let item of state.bookListstatus) {
                if (item._id === action.payload.id)
                    state.singleBook = item
            }
        }
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

            })
            .addCase(getallbook.pending, (state) => {

            })
            .addCase(getallbook.fulfilled, (state, action) => {
                console.log(action.payload.data);
                state.bookListstatus = action.payload.data
            })
            .addCase(getallbook.rejected, (state, action) => {

            })
    }
})

export const {getbookById} = bookSlice.actions;


export const selectcreatebook = (state) => state.books.craetebookstatus;
export const selectgetallstatus = (state) => state.books.getallstatus;
export const selectbookListstatus = (state) => state.books.bookListstatus;
export const selectsingleBook = (state) => state.books.singleBook;

export default bookSlice.reducer;