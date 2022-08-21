import React, {useState} from "react";
import {Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store";
import {nextWeek, prevWeek} from "../../../store/calendar";
import {format} from "date-fns";


export default function HeaderBar() {

    const currentDate = useSelector((state: RootState) => state.currentDate.time)
    const dispatch = useDispatch()

    return <div className={"h-full w-full bg-white border"}>
        <div className={"flex w-full h-full justify-between items-center"}>
            <div className={"flex items-center"}>
                <div
                    className={'w-40 h-10 bg-white text-zinc-500 text-center border-solid border-2 rounded-md mx-5'}>
                    Today
                </div>
                <div className={"mx-5"}>
                    <ButtonGroup
                        variant="text">
                        <Button onClick={() => {
                            dispatch(prevWeek())
                        }}> <ArrowBackIosIcon></ArrowBackIosIcon> </Button>
                        <Button onClick={() => {
                            dispatch(nextWeek())
                        }}><ArrowForwardIosIcon></ArrowForwardIosIcon> </Button>
                    </ButtonGroup>
                </div>
                <div className={"text-left text-black text-2xl"}>
                    {format(currentDate,'MM')}-{format(currentDate,"yyyy")}
                </div>
            </div>
            <div className={"flex items-center"}>
                <div className={"flex items-center"}>
                    <Button className={"h-10 w-10 mx-0"}><SearchIcon></SearchIcon></Button>
                    <Button className={"h-10 w-10 mx-0"}><HelpOutlineIcon></HelpOutlineIcon></Button>
                    <Button className={"h-10 w-10 mx-0"}><SettingsIcon></SettingsIcon></Button>
                    <div className={"w-2/3"}>
                        <FormControl fullWidth sx={{m: 1, minWidth: 120}}>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem>Day</MenuItem>
                                <MenuItem>Week</MenuItem>
                                <MenuItem>Month</MenuItem>
                                <MenuItem>Year</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <div>
                        <Button className={"h-10 w-10"}><AppsIcon></AppsIcon></Button>
                    </div>
                    <div className={"flex border-solid border-2 items-center"}>
                        <Button className={"h-10 w-10 mx-0"}><GoogleIcon></GoogleIcon></Button>
                        <Button className={"h-10 w-10 mx-0"}><AccountCircleIcon></AccountCircleIcon></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}