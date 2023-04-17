import React, { ReactNode } from "react";

export type activityType = {
    imageUrl: string;
    isUserActivity: boolean;
    icon?: ReactNode;
    user?: string;
    title?: string;
    message: string;
};

interface propsType {
    activity: activityType;
    children: ReactNode;
}

const Activity = ({ activity, children }: propsType) => {
    return (
        <div className={`${activity.isUserActivity ? "py-2" : "py-3"} flex items-center space-x-2 border-b border-b-[#ECECEC]`}>
            <>
                {activity.isUserActivity ? (
                    <img
                        className="w-6 h-6 rounded-full cursor-pointer"
                        src={activity.imageUrl}
                        alt={`${activity.user}'s profile pic`}
                    />
                ) : (
                    <div>{children}</div>
                )}
            </>
            <p
                className={`${
                    activity.isUserActivity ? "font-semibold" : ""
                } text-xs`}
            >
                {activity.isUserActivity
                    ? activity.user
                    : "- " + activity.title}
            </p>
            <p className="text-xs">{activity.message}</p>
        </div>
    );
};

export default Activity;
