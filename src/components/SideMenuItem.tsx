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
                className={`flex items-center space-x- ${
                    isActive ? "text-slate-400" : ""
                }`}
            >
                <div
                    className={`h-5 flex-initial lg:mr-3 xl:mr-0 border-l-[3px] ${
                        isActive
                            ? "border-l-grayBg"
                            : "border-l-black"
                    } group-hover:border-l-transparent`}
                ></div>
                <div className={`w-3/5 xl:w-1/2 mx-auto flex items-center space-x-4 lg:space-x-6 text-sm`}>
                    <div className="flex-initial">{children}</div>
                    <p className="flex-initial">{text}</p>
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
