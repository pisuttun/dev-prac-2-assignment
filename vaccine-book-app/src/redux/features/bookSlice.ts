import { createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
  bookItem: BookingItem[];
}
const initialState: BookState = { bookItem: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookItem.push(action.payload);
    },
    removeBooking: (state, action) => {
      const remainBooking = state.bookItem.filter(i=>i.name !== action.payload.name || i.date !== action.payload.date)
      state.bookItem = remainBooking;
    }
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;