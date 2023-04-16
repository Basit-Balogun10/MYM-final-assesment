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
            className={`${additionalStyles} ${isActive ? "border-l-[3px] border-l-grey" : "border-l-2 border-black"} py-2 hover:bg-white/10 hover:rounded cursor-pointer transition-colors ease-in-out`}
        >
            <div
                className={`w-[50%] ${isActive ? "text-slate-400" : ""}
                mx-auto flex items-center space-x-4 text-xs font-sembold`}
            >
                {children}
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SideMenuItem;
