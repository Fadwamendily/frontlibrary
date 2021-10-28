import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCategories } from './categoriesAPI';

const initialState = {
    categoriesname: [],

};

export const getallcategories = createAsyncThunk(
    'categories/getall',
    async () => {
        const response = await getAllCategories();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    

    },

    extraReducers: (builder) => {
        builder
            .addCase(getallcategories.pending, (state) => {

            })
            .addCase(getallcategories.fulfilled, (state, action) => {
            /*     console.log(action.payload);
                let arr = []
                for (let item of action.payload.data) {
                    arr.push(item.category)
                } */

                state.categoriesname = action.payload.data

            })
            .addCase(getallcategories.rejected, (state, action) => {

            });
    },
});

export const { } = categoriesSlice.actions;


export const selectcategoriesname = (state) => state.categories.categoriesname;


export default categoriesSlice.reducer;