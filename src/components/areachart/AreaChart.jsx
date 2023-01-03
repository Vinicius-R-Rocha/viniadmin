import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Areachart({data,colors,title}) {
  return (
    <div>
      <h3 className="chartTitle">{title}</h3>
    <AreaChart
      width={500}
      height={300}
      data={data}
      title = "teste"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {colors.map((item) => {
        return (
          <Area
            type="monotone"
            dataKey={item.name}
            stackId="1"
            stroke={item.fill}
            fill={item.fill}
          />
        );
      })}
    </AreaChart>
    </div>
  );
}
