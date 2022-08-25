import React from "react";
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";

const Layout: React.FC<{ children: any }> = (props) => {
    return <div className={"w-screen h-screen bg-red-400 flex flex-col "}>
                <div className={"h-18"}><HeaderBar/></div>
                <div className={"grow bg-blue-400 flex"}>
                    <div className={"h-full w-full"}>
                    {props.children}
                    </div>
                    <SideBar/>
                </div>
        </div>;
}

export default Layout