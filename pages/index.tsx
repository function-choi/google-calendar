import {useMemo, useState} from "react";
import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Container} from "postcss";
import {Weekdays} from "../src/common/util/Weekdays";
import {addDays, addMonths, endOfWeek, startOfWeek, subDays, subMonths} from "date-fns";
import WeekView from "../src/calendar/components/WeekView";
import {useSelector, useDispatch} from "react-redux";
import {nextWeek, prevWeek} from "../store/calendar"
import {RootState} from "../store"
import {format} from "date-fns";
import DateCell from "../src/calendar/components/DateCell";
import ScheduleModal from "../src/calendar/components/ScheduleModal";
import {ScheduleModalDate} from "../store/modal"


const Home: NextPage = () => {

    const currentDate = useSelector((state: RootState) => state.currentDate.time)
    const dispatch = useDispatch()
    const modalDate = useSelector((state: RootState) => state.modalSlice.ScheduleModalDate)
    const since = useMemo(() => startOfWeek(currentDate), [currentDate]);
    const until = useMemo(() => endOfWeek(currentDate), [currentDate]);

    // @ts-ignore
    return (
        <div className={"flex flex-col border w-full h-screen bg-white"}>
            <div className={"flex h-1/6 border"}>
                <div className={"w-16"}>
                </div>
                <div className={"grow grid grid-cols-7 border-solid"}>
                    <WeekView since={since} until={until}/>
                    {Weekdays.map(day => (
                        // eslint-disable-next-line react/jsx-key
                        <div key={day.toString()} className={"text-black"}>{day}</div>))
                    }
                </div>
            </div>
            <div className={"flex h-5/6 w-full"}>

                <div className={"w-16 border flex flex-col text-black"}>
                    <div className={"h-64"}>1AM</div>
                    <div className={"h-64"}>2AM</div>
                    <div className={"h-64"}>3AM</div>
                    <div className={"h-64"}>4AM</div>
                    <div className={"h-64"}>5AM</div>
                    <div className={"h-64"}>6AM</div>
                    <div className={"h-64"}>7AM</div>
                    <div className={"h-64"}>8AM</div>
                    <div className={"h-64"}>9AM</div>
                    <div className={"h-64"}>10AM</div>
                    <div className={"h-64"}>11AM</div>
                    <div className={"h-64"}>12PM</div>
                    <div className={"h-64"}>1PM</div>
                    <div className={"h-64"}>2PM</div>
                    <div className={"h-64"}>3PM</div>
                    <div className={"h-64"}>4PM</div>
                    <div className={"h-64"}>5PM</div>
                    <div className={"h-64"}>6PM</div>
                    <div className={"h-64"}>7PM</div>
                    <div className={"h-64"}>8PM</div>
                    <div className={"h-64"}>9PM</div>
                    <div className={"h-64"}>10PM</div>
                    <div className={"h-64"}>11PM</div>
                    <div className={"h-64"}></div>
                </div>
                <div className={"grow grid grid-cols-7"}>
                    <WeekView since={since} until={until} renderItem={date => <DateCell date={date} />} />
                </div>
            </div>
            <ScheduleModal setDate = {modalDate}/>
        </div>
)
}

export default Home
