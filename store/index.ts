import {configureStore} from "@reduxjs/toolkit";
import currentDate from './calendar';
import schedule from "./schedule";

export const store = configureStore({
    reducer :{
        currentDate,
        schedule
    }
})

export type RootState = ReturnType<typeof store.getState>;
