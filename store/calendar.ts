import {createSlice} from "@reduxjs/toolkit";
import {addDays, subDays, addMonths, subMonths} from "date-fns";

interface TCurrentDate {
    time : Date
}

const initialState : TCurrentDate = {
    time : new Date()
}

const currentDate = createSlice({
    name: 'currentDate',
    initialState,
    reducers: {
        nextWeek: state => {
             state.time = addDays(state.time, 7)
        },
        prevWeek: state => {
             state.time = subDays(state.time, 7)
        },
        nextMonth: state => {
            state.time = addMonths(state.time, 1)
        },
        prevMonth: state => {
            state.time = subMonths(state.time, 1)
        }
    }
})

export const {nextWeek, prevWeek} = currentDate.actions

export default currentDate.reducer
