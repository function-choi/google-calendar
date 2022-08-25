import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import {openModal, closeModal} from "../../../store/modal";
import {addSchedule, deleteSchedule, updateSchedule, TScheduleDetail, TSchedule} from "../../../store/schedule"
import {format} from "date-fns";
import {Button, MenuItem, Select} from "@mui/material";
import {TextField} from "@mui/material";
import {ko} from "date-fns/locale";
import {useEffect, useState} from "react";
import {CalendarPicker} from '@mui/x-date-pickers';

type Props = {
    setDate?: Date;
}

export default function ScheduleModal(setDate: Props) {
    const modalDate = new Date(JSON.stringify(setDate).slice(12, 36))
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const saveSchedule = () => {
        const newDate = modalDate
        const newSchedule: { date: string, data: TScheduleDetail } = {
            date: newDate.toString(),
            data:
                {
                    id: '(No Title)',
                    title: title,
                    startTime: {
                        hour: Number(startTime.slice(0,2)), minute: Number(startTime.slice(3,5))
                    },
                    endTime: {
                        hour: Number(endTime.slice(0,2)), minute: Number(endTime.slice(3,5))
                    },
                    location: location,
                    description: description,
                }
        }
        dispatch(addSchedule(newSchedule))
        handleCloseModal()
    }

    const isModalOpen = useSelector((state: RootState) => state.modalSlice.isScheduleModalOpen)
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        setTitle('');
        setLocation('');
        setDescription('');
        setStartTime('');

        dispatch(closeModal());
    }
    return (
        <dialog className="backdrop:bg-gray-50 bg-white text-black border top-0 bottom-0 h-1/2 w-1/5"
                open={isModalOpen}>
            <form method="dialog">
                <div className={"flex place-content-between"}>
                    <div></div>
                    <Button className={"bg-black"} onClick={handleCloseModal}>X</Button>
                </div>
                <TextField id="standard-basic" label="Add title" variant="standard" value={title}
                           onChange={e => setTitle(e.target.value)}/>
                <br/>
                <span>{format(modalDate, "yyyy/MM/dd (eee)")}</span>
                <br/>
                <input  type="time" style = {{background : '#ffffff'}} value={startTime} onChange={(e) => setStartTime(e.currentTarget.value)} />
                <span>~</span>
                <input type="time" style = {{background : '#ffffff'}}  value={endTime} onChange={(e) => setEndTime(e.currentTarget.value)} />

                <TextField id="standard-basic" label="Add location" variant="standard" value={location}
                           onChange={e => setLocation(e.target.value)}/>
                <br/>
                <TextField id="standard-basic" label="Add description" variant="standard" value={description}
                           onChange={e => setDescription(e.target.value)}/>
                <br/>
                <Button variant="outlined"
                        color="primary"
                        onClick={saveSchedule}
                >
                    save
                </Button>
            </form>
        </dialog>
    )
}