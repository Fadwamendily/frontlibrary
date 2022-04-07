import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createorder,getallorders } from './orderAPI';

const initialState = {
    craeteorderstatus: '',
    orderListstatus: [],

};

export const getallorder = createAsyncThunk(
    'order/getallorders',
    async () => {
        const response = await getallorders();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const creatorder = createAsyncThunk(
    'order/create',
    async (data) => {
        const response = await createorder(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(creatorder.pending, (state) => {
                state.craeteorderstatus = 'loading'

            })
            .addCase(creatorder.fulfilled, (state, action) => {
                state.craeteorderstatus = 'success'
                console.log(action.payload);
            })
            .addCase(creatorder.rejected, (state, action) => {
                state.craeteorderstatus = 'failure'

            })
            .addCase(getallorder.pending, (state) => {

            })
            .addCase(getallorder.fulfilled, (state, action) => {
                 state.orderListstatus = action.payload.data
            })
            .addCase(getallorder.rejected, (state, action) => {

            })
    }
})

export const { } = orderSlice.actions;

export const selectcreateorder = (state) => state.orders.craeteorderstatus;
export const selectgetallstatus = (state) => state.orders.getallstatus;
export const selectorderListstatus = (state) => state.orders.orderListstatus;

export default orderSlice.reducer;