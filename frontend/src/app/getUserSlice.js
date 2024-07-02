import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//Get all user action
export const getAllUser = createAsyncThunk(
  "getUsers",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://665448ca1c6af63f46773c31.mockapi.io/crud"
      );
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data);
    }
  }
);
//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://665448ca1c6af63f46773c31.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result,'result');
      return result;
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data);
    }
  }
);
//delete single user
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://665448ca1c6af63f46773c31.mockapi.io/crud/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);
//get single user
export const getSingleUser = createAsyncThunk(
  "getSingleUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://665448ca1c6af63f46773c31.mockapi.io/crud/${id}`
    );
    try {
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


//update user
export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ id, name, email, age, gender }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://665448ca1c6af63f46773c31.mockapi.io/crud/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, age, gender }),
        }
      );
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.singleUser = [];
        state.users = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload,'action.payload');
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((post) => post.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.singleUser = [action.payload];
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("updated user fulfilled", action.payload);
        state.loading = false;
        state.users = state.users.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

  },

});
export const { searchUser } = gitUser.actions;
export default gitUser.reducer;