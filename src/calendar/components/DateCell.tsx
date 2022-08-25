import {format} from "date-fns";
import {addSchedule, deleteSchedule, updateSchedule, TSchedule, TScheduleDetail} from "../../../store/schedule"
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from 'react'
import {openModal} from "../../../store/modal";
import ScheduleModal from "./ScheduleModal";

type Props = {
    date: Date;
}

export default function DateCell({date}: Props) {

    const calculateHeight = (schedule: TScheduleDetail) => {
        const t = (schedule.startTime.hour * 60 + schedule.startTime.minute) / 60 * 34.61 + 34.61 + 200
        const top = `${schedule.startTime.hour/24  * 100}%`
        // let h = ((schedule.endTime.hour - schedule.startTime.hour) * 60 - schedule.endTime.minute + schedule.startTime.minute) / 60 * 34.61
        const height = `${(schedule.endTime.hour - schedule.startTime.hour) / 24 * 100}%`;
        // if (h < 20) h = 20
        // const height = `${h}px`
        return {top: top, height: height}
    }
    const dispatch = useDispatch()
    const schedulesByDate = useSelector((state: RootState) => state.schedule)
    // const dispatch = useDispatch()
    const datestr = format(date, 'yyyy-MM-dd')
    const schedules = schedulesByDate[datestr]
    console.log(schedules, schedulesByDate, datestr)

    const handleDeleteSchedule = useCallback((e: React.MouseEvent, schedule: TScheduleDetail) => {
        e.stopPropagation();
        dispatch(deleteSchedule({ date: date.toString(), data: schedule }))
    }, [dispatch]);
    return (
        <div onClick={() => {
            {
                dispatch(openModal({date}))
            }
        }}>
            {schedules?.map((schedule) => (
                <div key={schedule.id}>
                    <div className={"absolute text-white border text-center bg-gray-400"}
                         style={{top: calculateHeight(schedule).top, height: calculateHeight(schedule).height, width: `${1/7 * 100}%`}}>
                        {schedule.title}
                        <button onClick={(e) => handleDeleteSchedule(e, schedule)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
