import { configureStore } from "@reduxjs/toolkit";
import voteEmployeeReducer from "./reducers";

export const store = configureStore({
	reducer: {
		voteEmployee: voteEmployeeReducer,
	},
});
