import React from "react";
import { PieChart, Pie, Legend } from "recharts";
import "./pieChart.css"


const renderColorfulLegendText = (value, entry) => {
  return (
    <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
      {value}
    </span>
  );
};

export default function graphPie ({data,title}){

    return (
      <div>
        <h3 className="chartTitle">{title}</h3>
      <PieChart width={680} height={400} >
        <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          padding={5}
          formatter={renderColorfulLegendText}
        />
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        />
      </PieChart>
      </div>
    );
  }

