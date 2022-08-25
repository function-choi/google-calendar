import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {format} from "date-fns";

export interface TScheduleDetail {
    id: string
    title: string;
    startTime: { hour: number, minute: number };
    endTime: { hour: number, minute: number };
    location: string;
    description: string;
}

export interface TSchedule {
    [key: string]: TScheduleDetail[]
}

const initialState: TSchedule = {
    '2020-08-25': [
        {
            id:'0',
            title: 'coding',
            startTime: {hour:21, minute:30},
            endTime: {hour:22,minute:30},
            location: 'Office',
            description: 'coding'
        }
    ]
};

const extractKey = (date: Date) => format(date, 'yyyy-MM-dd');

const Schedule = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        addSchedule: (state, action: PayloadAction<{ date: string; data: Omit<TScheduleDetail, 'id'> }>) => {
            const {date, data} = action.payload;
            console.log("Hello woohyeok")
            const newDetail: TScheduleDetail = {...data, id: nanoid()};
            const currentDate = new Date(date);
            state[extractKey(currentDate)]= state[extractKey(currentDate)] || []
            state[extractKey(currentDate)].push(newDetail);
            console.log(state, data)
        },
        deleteSchedule: (state, action: PayloadAction<{ date: string; data: TScheduleDetail }>) => {
            const {date, data} = action.payload;
            const currentDate = new Date(date);
            state[extractKey(currentDate)] = state[extractKey(currentDate)].filter((state) => state.id !== data.id)
        },
        updateSchedule: (state, action: PayloadAction<{ date: Date; data: TScheduleDetail }>) => {
            const {date, data} = action.payload;
            const idx = state[extractKey(date)].findIndex((s) => s.id === data.id);
            state[extractKey(date)] = [...state[extractKey(date)].slice(0, idx), data, ...state[extractKey(date)].slice(idx + 1)]
        }
    }
})

export const {addSchedule, deleteSchedule, updateSchedule} = Schedule.actions

export default Schedule.reducer