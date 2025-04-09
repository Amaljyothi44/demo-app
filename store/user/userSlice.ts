import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (userData: any, { getState, rejectWithValue }) => {
        try {
            return userData
        } catch (error) {
            return { error: "Not working" }
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;