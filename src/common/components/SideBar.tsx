import React from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SideBar() {
    return <div className={"flex w-16 h-full bg-white border flex-col"}>
        <div className={"flex flex-col basis-1/2 justify-between border"}>
            <Button>
                <LightbulbIcon></LightbulbIcon>
            </Button>
            <Button>
                <TaskAltIcon></TaskAltIcon>
            </Button>
            <Button>
                <AccountCircleIcon></AccountCircleIcon>
            </Button>
            <Button>
                <LocationOnIcon></LocationOnIcon>
            </Button>
        </div>
        <div className={"flex flex-col basis-1/2 justify-between border"}>
            <Button>
                <AddIcon></AddIcon>
            </Button>
            <Button>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </Button>
        </div>
    </div>;
}