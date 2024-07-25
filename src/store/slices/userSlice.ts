import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    // users: [] as { name: string; age: number }[],
    users: [{
      name: "One",
      lastName: "Propeller",
      address: "Hamdije Kreševljakovića 64, Sarajevo 71000",
      website: "https://onepropeller.io/",
    }] as any,
  },
  reducers: {
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
console.log("From users reducer");
export const { addUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
