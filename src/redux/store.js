import { configureStore, compose } from '@reduxjs/toolkit'
import colorThemeReducer from './slices/ColorTheme'

const reduxExt = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default configureStore({
  reducer: {
    colorTheme: colorThemeReducer
  },
  reduxExt
})

