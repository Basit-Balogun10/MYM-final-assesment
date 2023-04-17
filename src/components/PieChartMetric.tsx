import React from 'react'

interface propsType {
    count: number;
    title: string;
}

const PieChartMetric = ({
    count,
    title,
}: propsType) => {
    return (
        <div>
            <h4 className="text-grayText text-xs font-medium">{title}</h4>
            <h3 className="text-lg font-rubik font-medium">{count}</h3>
        </div>
    );
};

export default PieChartMetric