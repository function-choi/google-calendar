import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {format} from "date-fns";

interface TScheduleDetail {
    id: string
    title: string;
    startTime: { hour: number, minute: number };
    endTime: { hour: number, minute: number };
    location: string;
    description: string;
    eventColor: string;
}

interface TSchedule {
    [key: string]: TScheduleDetail[]
}

const initialState: TSchedule = {};

const extractKey = (date: Date) => format(date, 'yyyy-mm-dd');

const Schedule = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        addSchedule: (state, action: PayloadAction<{ date: Date; data: Omit<TScheduleDetail, 'id'> }>) => {
            const {date, data} = action.payload;
            const newDetail: TScheduleDetail = {...data, id: nanoid()};
            state[extractKey(date)].push(newDetail);
        },
        deleteSchedule: (state, action: PayloadAction<{ date: Date; data: TScheduleDetail }>) => {
            const {date, data} = action.payload;
            state[extractKey(date)] = state[extractKey(date)].filter((state) => state.id !== data.id)
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