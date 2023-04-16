import React, { ReactNode } from "react";

interface propsType {
    additionalStyles: string;
    children: ReactNode;
    isActive: boolean;
    text: string;
}

const SideMenuItem = ({
    additionalStyles,
    children,
    isActive,
    text,
}: propsType) => {
    return (
        <div
            className={`${additionalStyles} ${isActive ? "w-[57%] border-l-2 border-l-grey" : ""} py-2 hover:bg-red-500/60 rounded cursor-pointer`}
        >
            <div
                className={`${isActive ? "w-[57%] text-slate-400" : "w-[55%]"}
                mx-auto flex items-center space-x-4 text-sm font-semibold`}
            >
                {children}
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SideMenuItem;
