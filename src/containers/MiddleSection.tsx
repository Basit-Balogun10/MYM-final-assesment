import React from "react";
import BarChart from "../components/svg/BarChart";
import BarChartMetric from "../components/BarChartMetric";

type barChartMetric = {
    count: number;
    percentage: number;
    title: string;
};

const barChartMetrics: barChartMetric[] = [
    {
        count: 2632,
        percentage: 56,
        title: "Connections",
    },
    {
        count: 2667,
        percentage: 0,
        title: "Followers",
    },
    {
        count: 100,
        percentage: 60,
        title: "Connect Invites",
    },
];

const MiddleSection = () => {
    return (
        <section className="h-screen basis-[23%] py-6 px-8 space-y-12 bg-grayBg">
            <h1 className="text-xl font-semibold tracking-wide">Dashboard</h1>
            {/* BARCHART METRICS */}
            <div>
                {barChartMetrics.map((metric, index) => (
                    <BarChartMetric
                        count={metric.count}
                        hasTopBorder={index === 0 ? false : true}
                        percentage={metric.percentage}
                        title={metric.title}
                    />
                ))}
            </div>
            <div className="space-y-4 w-full">
                <BarChart />
                <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-greenBg rounded">
                        </div>
                        <p className="text-[0.6rem]">Connections</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-black rounded">
                        </div>
                        <p className="text-[0.6rem]">Followers</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blueBg rounded">
                        </div>
                        <p className="text-[0.6rem]">Connect Invites</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiddleSection;
