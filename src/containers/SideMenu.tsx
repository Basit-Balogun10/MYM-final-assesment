import React, { ReactElement } from "react";
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
    { name: "Calendar", icon: <Calculator color="#F8F8F8" size="20" />, isActive: false },
    { name: "Campaigns", icon: <Flash />, isActive: false },
    { name: "Settings", icon: <Settings />, isActive: false },
    { name: "Help", icon: <Danger />, isActive: false },
];

const SideMenu = () => {
    return (
        <section className="basis-[40%] md:basis-[20%] xl:basis-[15%] md:w-[20%] flex-1 lg:flex-none grow shrink-0 lg:shrink-[initial] py-6 space-y-4 bg-black text-grayBg">
            {/* LOGO */}
            <div className="w-3/4 md:w-1/2 ml-10 sm:ml-14 md:mx-auto mb-6 flex items-center md:justify-center space-x-2">
                <div className="flex-initial">
                    <Logo />
                </div>
                <h1 className="md:text-sm">Realply</h1>
            </div>
            {/* NAVIGATION MENU */}
            <div>
                {navigationMenuItems.map((item, index) => (
                    <SideMenuItem
                        key={index}
                        additionalStyles={` ${index === 4 ? "mt-20 sm:mt-9" : "mt-1"}`}
                        isActive={item.isActive}
                        text={item.name}
                    >
                        {item.icon}
                    </SideMenuItem>
                ))}
            </div>
            {/* PLAN UPGRADE NOTICE */}
            <div className="w-4/5 space-y-2 p-4 mx-auto border border-white/30 rounded-3xl">
                <div className="text-center sm:text-left font-roboto">
                    <h3 className="text-grayBg text-xs font-bold">
                        Your free trial is about to end in
                    </h3>
                    <h3 className="text-grayBg text-lg font-bold">10 days.</h3>
                </div>
                <div className="space-y-2">
                    <p className="text-center sm:text-left text-slate-400 text-[0.6rem] leading-tight">
                        You will not be billed during your free trial
                    </p>
                    <p className="hidden sm:block text-slate-400 text-[0.6rem] leading-tight">
                        You will not be billed during your free trial.To keep
                        your projects running after the trial end, upgrade to a
                        paid option.
                    </p>
                </div>
                <button className="w-full px-6 py-2 bg-white/5 hover:bg-white/10 font-roboto text-xs text-center rounded-md ring-1 ring-white/30 transition-colors ease-in-out">
                    Upgrade
                </button>
            </div>
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
