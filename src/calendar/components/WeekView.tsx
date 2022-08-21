import {useMemo} from "react";
import DateCell from "./DateCell";
import {addDays, isBefore} from "date-fns";

type Props = {
    since : Date;
    until : Date;
}

export default function WeekView({ since, until}: Props) {
    const dates = useMemo(() => {
        const currentDates = [];
        for (let i = since; isBefore(i, until); i = addDays(i, 1)) {
            currentDates.push(i);
        }
        return currentDates;
    }, [since, until]);
    return (
        <>
            {dates.map((date) => (
                <DateCell date={date} />
            ))}
        {/*    TODO: 보여질 날짜가 바뀌면 다른 닐찌 집합을 보여준다. */}
        </>
    )
}