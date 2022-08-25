import React, {useMemo} from "react";
import DateCell from "./DateCell";
import {addDays, format, isBefore} from "date-fns";

type Props = {
    since: Date;
    until: Date;
    renderItem?(date: Date): React.ReactNode;
}

export default function WeekView({since, until, renderItem}: Props) {
    const dates = useMemo(() => {
        const currentDates = [];
        for (let i = since; isBefore(i, until); i = addDays(i, 1)) {
            currentDates.push(i);
        }
        return currentDates;
    }, [since, until]);
    return (
        <>
            {dates.map((date) => renderItem ? <React.Fragment key={date.toLocaleDateString()}>{renderItem(date)}</React.Fragment> : (
                    <span className={"border text-center"} key={date.toLocaleDateString()} style={{color: 'black'}}>
                    {format(date, 'MM-dd')}
                 </span>)
            )}
        </>
    )
}