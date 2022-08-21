import {format} from "date-fns";

type Props = {
    date : Date;
}

export default function DateCell({ date }:Props) {
    console.log(date)
    return (
        <span style={{ color: 'black'}}>
            {format(date, 'yyyy-MM-dd')}
        {/*    TODO: 날짜를 받으면 24시간짜리 스케쥴표를 보여준다. */}
        </span>
    )
}
