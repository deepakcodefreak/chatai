import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './../modules/chat/chatSlice'

export const store = configureStore({
    reducer: chatReducer
})