import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createbook, getallBooks } from './bookAPI';
const orderedBooks = localStorage.getItem('orderedBooks') 
                       ? JSON.parse(localStorage.getItem('orderedBooks'))
                       : []

const initialState = {
    craetebookstatus: '',
    bookListstatus: [],
    singleBook: null,
    orderedbooks: orderedBooks,
    quantity: 0,
    total: 0,



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
                console.log("item",item)
                    state.singleBook = item

            }
        },
        orderaBook: (state, action) => {
            console.log("payload here", action.payload)

            for (let item of state.bookListstatus) {
                if (item._id === action.payload.id)
                state.singleBook = item
            }
            state.orderedbooks.push(state.singleBook);
            localStorage.setItem('orderedBooks', JSON.stringify(state.orderedbooks))

 

          },
          reset: (state) => {
            state.orderedbooks = [];
            state.quantity = 0;
            state.total = 0;
            localStorage.clear('orderedBooks');
          },
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

export const {getbookById,orderaBook,reset} = bookSlice.actions;


export const selectcreatebook = (state) => state.books.craetebookstatus;
export const selectgetallstatus = (state) => state.books.getallstatus;
export const selectbookListstatus = (state) => state.books.bookListstatus;
export const selectsingleBook = (state) => state.books.singleBook;
export const selectorderedbooks = (state) => state.books.orderedbooks;
export const selectquantity = (state) => state.books.quantity;
export const selecttotal = (state) => state.books.total;

export default bookSlice.reducer;