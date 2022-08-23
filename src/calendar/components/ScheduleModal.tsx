import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import {openModal, closeModal} from "../../../store/modal";
import {addSchedule,deleteSchedule,updateSchedule} from "../../../store/schedule"
import {format} from "date-fns";
import {Button} from "@mui/material";

type Props = {
    setDate: Date;
}

export default function ScheduleModal(setDate:Props)  {
    const modalDate = new Date(JSON.stringify(setDate).slice(12,36))
    const dispatch = useDispatch()
    return (
        <div className={"text-black"}>
            {modalDate.toLocaleDateString()}
            {/*<Button onClick={() => dispatch(addSchedule(}></Button>*/}
        </div>
    )
}