import { createSlice } from '@reduxjs/toolkit' // 1

// 2
const initialState = {
  value: [{ password: 'hello', name: 'test'}],
}

// 3 Add the password slice
export const passwordsSlice = createSlice({
	name: 'passwords',
	initialState,
	reducers: {
		addPassword: (state, action) => {
			state.value.push(action.payload)
		},
		deletePassword: (state, action) => {
			state.value.splice(action.payload, 1)
		}
	}
})

export const { addPassword, deletePassword } = passwordsSlice.actions
export default passwordsSlice.reducer