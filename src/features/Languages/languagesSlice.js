import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllLanguegess } from './languagesAPI';

const initialState = {
    languagesname: [],

};

export const getalllanguages = createAsyncThunk(
    'languages/getall',
    async () => {
        const response = await getAllLanguegess();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {



    },

    extraReducers: (builder) => {
        builder
            .addCase(getalllanguages.pending, (state) => {

            })
            .addCase(getalllanguages.fulfilled, (state, action) => {
                console.log(action.payload);
                /* let arr = []
                for (let item of action.payload.data) {
                    arr.push(item.language)
                } */

                state.languagesname = action.payload.data
            })
            .addCase(getalllanguages.rejected, (state, action) => {

            });
    },
});

export const { } = languagesSlice.actions;


export const selectlanguagesname = (state) => state.languages.languagesname;


export default languagesSlice.reducer;