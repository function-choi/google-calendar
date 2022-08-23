import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import {openModal, closeModal} from "../../../store/modal";
import {addSchedule,deleteSchedule,updateSchedule} from "../../../store/schedule"
import {format} from "date-fns";
import {Button, Chip, MenuItem, Select} from "@mui/material";
import {TextField} from "@mui/material";

type Props = {
    setDate?: Date;
}

export default function ScheduleModal(setDate:Props)  {
    const modalDate = new Date(JSON.stringify(setDate).slice(12,36))
    const isModalOpen = useSelector((state: RootState) => state.modalSlice.isScheduleModalOpen)
    const dispatch = useDispatch()
    return (
        <dialog className="backdrop:bg-gray-50 bg-white text-black border top-0 bottom-0 h-1/2 w-1/5" open = {isModalOpen}>
            <form method="dialog">
                <div className={"flex place-content-between"}>
                    <div></div>
                    <Button className={"bg-black"} onClick={() => dispatch(closeModal())}>X</Button>
                </div>
                <TextField id="standard-basic" label="Add title" variant="standard" />
                <br/>
                {modalDate.toLocaleDateString()}
                <br/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    className = "w-20 h-10"
                >
                    <MenuItem value={10}>시작시간</MenuItem>
                </Select>
                <span>-</span>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    className = "w-20 h-10"
                >
                    <MenuItem value={10}>끝나는시간</MenuItem>
                </Select>
                <br/>
                <TextField id="standard-basic" label="Add location" variant="standard" />
                <br/>
                <TextField id="standard-basic" label="Add description" variant="standard" />
                <br/>
                <Chip color="primary"></Chip>
                <Chip color="default"></Chip>
                <Chip color="error"></Chip>
                <Chip color="info"></Chip>
                <Chip color="success"></Chip>
                <Chip color="warning"></Chip>
                <div><Button variant="outlined" color="primary">save</Button></div>
            </form>
        </dialog>
    )
}