import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  getMe, sendMail, updateUser, uploadAvatar } from './userAPI';
const initialState = {

    user: null,
    avatarstatus: '',
    updatestatus:'',
    userdetails : null
};

// uploadd user avatar redux action
export const uploadavatar = createAsyncThunk(
    'users/avatar',
    async (data) => {
        const response = await uploadAvatar(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);
//update user
export const updateuser=createAsyncThunk(
    'users/updateUser',
    async (data) => {
        const response = await updateUser(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    } 
)
//sendMAil
export const sendmail=createAsyncThunk(
    'users/sendmail',
    async (data) => {
        const response = await sendMail(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    } 
)

//get me action
export const getme=createAsyncThunk(
    'users/getme',
    async () => {
        const response = await getMe();
        // The value we return becomes the `fulfilled` action payload
        return response;
    } 
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            /// upload avaytar
            .addCase(uploadavatar.pending, (state, action) => {
                state.avatarstatus = 'loading'
            })
            .addCase(uploadavatar.fulfilled, (state, action) => {
                console.log(action.payload);

                if (action.payload.data) {
                    state.avatarstatus = 'success'
                    state.user = action.payload.data.data
                } else {
                    state.avatarstatus = 'failure'

                }

            })
            .addCase(uploadavatar.rejected, (state, action) => {

            })
            .addCase(updateuser.pending, (state, action) => {
                state.updatestatus = 'loading'
            })
            .addCase(updateuser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.updatestatus = 'success'

            })
            .addCase(updateuser.rejected, (state, action) => {
                state.updatestatus = 'failure'

            })
            .addCase(sendmail.pending, (state, action) => {
                state.sendmailstatus = 'loading'
            })
            .addCase(sendmail.fulfilled, (state, action) => {
                console.log(action.payload);
                state.sendmailstatus = 'success'

            })
            .addCase(sendmail.rejected, (state, action) => {
                state.sendmailstatus = 'failure'

            })
            /////getme
            .addCase(getme.pending, (state, action) => {
                state.getmestatus = 'loading'
            })
            .addCase(getme.fulfilled, (state, action) => {
                state.getmestatus = 'success'
                console.log(action.payload);
                state.userdetails = action.payload.data.data

            })
            .addCase(getme.rejected, (state, action) => {
                state.getmestatus = 'failure'

            })
    },
});

export const { } = userSlice.actions;


export const selectupdatestatus = (state) => state.users.updatestatus;
export const selectuserdetails = (state) => state.users.userdetails;
export const selectavatarstatus = (state) => state.users.avatarstatus;


export default userSlice.reducer;