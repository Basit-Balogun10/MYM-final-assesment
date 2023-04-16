import React, { ReactElement, useState } from "react";
import Logo from "../components/svg/Logo";
import SideMenuItem from "../components/SideMenuItem";
import Grid from "../components/svg/Grid";
import Message from "../components/svg/Message";
import Calculator from "../components/svg/Calculator";
import Flash from "../components/svg/Flash";
import Settings from "../components/svg/Settings";
import Danger from "../components/svg/Danger";
import Logout from "../components/svg/Logout";

type navigationMenuItem = {
    name: string;
    isActive: boolean;
    icon: ReactElement;
};

const navigationMenuItems: navigationMenuItem[] = [
    { name: "Dashboard", icon: <Grid />, isActive: true },
    { name: "Message", icon: <Message />, isActive: false },
    { name: "Calendar", icon: <Calculator />, isActive: false },
    { name: "Campaigns", icon: <Flash />, isActive: false },
    { name: "Settings", icon: <Settings />, isActive: false },
    { name: "Help", icon: <Danger />, isActive: false },
];

const SideMenu = () => {
    return (
        <section className="py-8 pb-6 h-screen basis-[15%] bg-black text-grey">
            {/* LOGO */}
            <div className="w-1/2 mx-auto mb-12 flex items-center justify-center space-x-2">
                <Logo />
                <h1 className="text-">Realply</h1>
            </div>
            {/* NAVIGATION MENU */}
            <div>
                {navigationMenuItems.map((item, index) => (
                    <SideMenuItem
                        additionalStyles={` ${index === 4 ? "mt-24" : "mt-2"}`}
                        isActive={item.isActive}
                        text={item.name}
                    >
                        {item.icon}
                    </SideMenuItem>
                ))}
            </div>
            {/* PLAN UPGRADE NOTICE */}
            <div></div>
            {/* LOGOUT */}
            <SideMenuItem
                additionalStyles="mt-8"
                isActive={false}
                text="Logout"
            >
                <Logout />
            </SideMenuItem>
        </section>
    );
};

export default SideMenu;
