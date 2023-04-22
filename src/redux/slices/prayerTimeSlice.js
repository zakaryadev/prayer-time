import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTime } from "../../axios";

export const fetchDay = createAsyncThunk(
  "prayerTimeSlice/fetchDay",
  async () => {
    const { data } = await getTime.get();
    return data;
  }
);

export const fetchMonth = createAsyncThunk(
  "prayerTimeSlice/fetchDay",
  async (month) => {
    const { data } = await axios.get(month);
    return data;
  }
);

const initialState = {
  data: [],
  status: "loading",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
      state.list = [];
    },
    setList: (state, action) => {
      state.list.push(action.payload);
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.status = "success";
      state.list = action.payload;
      localStorage.setItem("nextPageToken", action.payload.nextPageToken);
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.status = "error";
      state.list = [];
    });
  },
});

export const { setSearchValue, setList, setOrder } = searchSlice.actions;

export default searchSlice.reducer;
