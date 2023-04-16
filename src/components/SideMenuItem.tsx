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
            className={`${additionalStyles} group py-2 hover:bg-white/10 hover:rounded-md cursor-pointer transition-colors ease-in-out`}
        >
            <div
                className={`flex items-center space-x-11 ${
                    isActive ? "text-slate-400" : ""
                }`}
            >
                <div
                    className={`w-2 h-4 border-l-2 ${
                        isActive
                            ? "border-l-grayBg"
                            : "border-l-black"
                    } group-hover:border-l-transparent`}
                ></div>
                <div className={`flex items-center space-x-4 text-xs`}>
                    {children}
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SideMenuItem;

// ${
//                 isActive
//                     ? "border-l-[3px] border-l-grayBg"
//                     : "border-l-2 border-black"
//             }
