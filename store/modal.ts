import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TScheduleDetail} from "./schedule";

interface TModal {
    isScheduleModalOpen? : boolean
    ScheduleModalDate? : Date
}

const  initialState : TModal = {
    isScheduleModalOpen : false,
    ScheduleModalDate : new Date()
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{ date: Date}>)=> {
            state.isScheduleModalOpen = true;
            state.ScheduleModalDate = action.payload.date;
        },
        closeModal: (state) => {
            state.isScheduleModalOpen = false;
        }
    }
})


export const {openModal, closeModal} = modalSlice.actions

export default modalSlice.reducer

export class ScheduleModalDate {
}