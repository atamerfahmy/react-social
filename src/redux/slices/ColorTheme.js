import { createSlice } from '@reduxjs/toolkit'

export const colorTheme = createSlice({
    name: 'colorTheme',
    initialState: {
        value: "light",
    },
    reducers: {
        toggle: (state) => {
            state.value = state.value === "light"? "dark" : "light"
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleDark, toggleLight, toggle } = colorTheme.actions

export default colorTheme.reducer