import {format} from "date-fns";
import {addSchedule, deleteSchedule, updateSchedule, TSchedule, TScheduleDetail} from "../../../store/schedule"
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from 'react'
import {openModal} from "../../../store/modal";

type Props = {
    date: Date;
}

export default function DateCell({date}: Props) {

    const calculateHeight = (schedule: TScheduleDetail) => {
        const top = `${schedule.startTime.hour/24  * 100}%`
        const height = `${(schedule.endTime.hour - schedule.startTime.hour) / 24 * 100}%`;
        return {top: top, height: height}
    }
    const dispatch = useDispatch()
    const schedulesByDate = useSelector((state: RootState) => state.schedule)
    // const dispatch = useDispatch()
    const datestr = format(date, 'yyyy-MM-dd')
    const schedules = schedulesByDate[datestr]

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
                    <div className={"absolute text-white border text-center bg-blue-400"}
                         style={{top: calculateHeight(schedule).top, height: calculateHeight(schedule).height, width: `${1/7 * 100}%`}}>
                        <div className={"flex flex-row place-content-between"}>
                            <div className={"mx-8"}>{schedule.title}</div>
                            <button className = "bg-white text-blue-400 mx-8 h-8 rounded-full" onClick={(e) => handleDeleteSchedule(e, schedule)}>X</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
