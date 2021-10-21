import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createfile } from './fileAPI';

const initialState = {
    craetefilestatus: ''
};

export const creatfile = createAsyncThunk(
    'file/create',
    async (data) => {
        const response = await createfile(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(creatfile.pending, (state) => {
                state.craetefilestatus = 'loading'

            })
            .addCase(creatfile.fulfilled, (state, action) => {
                state.craetefilestatus = 'success'
                console.log(action.payload);
            })
            .addCase(creatfile.rejected, (state, action) => {
                state.craetefilestatus = 'failure'

            });
    },
});

export const { } = fileSlice.actions;

export const selectcreatefile = (state) => state.files.craetefilestatus;

export default fileSlice.reducer;