import React from 'react'
import TrendUp from './svg/TrendUp';

interface propsType {
    count: number;
    hasTopBorder: boolean;
    percentage: number;
    title: string;
}

const BarChartMetric = ({count, hasTopBorder, percentage, title}: propsType) => {
  return (
    <div className={`py-2 ${hasTopBorder ? "border-t-2 border-t-[#ECECEC]" : ""}`}>
        <h4 className="text-grayText text-xs font-medium">{title}</h4>
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-rubik font-medium">{count}</h3>
            <div className="w-12 flex items-center justify-center py-px space-x-1 bg-greenBg rounded">
                <TrendUp />
                <p className="mt-px text-[0.55rem] text-greenText">{percentage}%</p>
            </div>
        </div>
    </div>
  )
}

export default BarChartMetric