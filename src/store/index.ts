import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./slices/userSlice";
import { addUsers } from "./slices/userSlice";

console.log("From store");

export const store: any = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export { addUsers };
