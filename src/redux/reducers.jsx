import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	employees: [],
};

export const voteEmployeeSlice = createSlice({
	name: "voteEmployee",
	initialState,
	reducers: {
		increment: (state, action) => {
			const employee = state.employees.find((employee) => employee.id === action.payload.id);
			if (employee) {
				employee.votes++;
			} else {
				state.employees.push({ ...action.payload, votes: 1 });
			}
		},
		decrement: (state, action) => {
			const employee = state.employees.find((employee) => employee.id === action.payload.id);
			if (employee) {
				employee.votes--;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = voteEmployeeSlice.actions;

export default voteEmployeeSlice.reducer;
