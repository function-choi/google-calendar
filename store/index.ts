import {configureStore} from "@reduxjs/toolkit";
import currentDate from './calendar';
import schedule from "./schedule";
import modalSlice from "./modal";

export const store = configureStore({
    reducer :{
        currentDate,
        schedule,
        modalSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
