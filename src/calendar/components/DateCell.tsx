import {format} from "date-fns";
import {addSchedule, deleteSchedule, updateSchedule, TSchedule,TScheduleDetail} from "../../../store/schedule"
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {openModal} from "../../../store/modal";
import ScheduleModal from "./ScheduleModal";

type Props = {
    date : Date;
}



export default function DateCell({ date }:Props) {
    const dispatch = useDispatch()
    const schedulesByDate = useSelector((state: RootState) => state.schedule)
    // const dispatch = useDispatch()
    const datestr = date.toLocaleDateString()
    const schedules = schedulesByDate[datestr]
    // const t = s.startTime.hour * 60 + s.startTime.minute
    // const top = `${t}px`
    // let h = (s.endTime.hour - s.startTime.hour) * 60 - s.startTime.minute + s.endTime.minute
    // const height = `${h}px`

    return (
            <div onClick={ () => {{dispatch(openModal({date}))}}}>
                {schedules?.map((schedule) => (
                  <div key={schedule.id}>
                      {schedule.title}
                  </div>
                ))}
            </div>
    )
}
