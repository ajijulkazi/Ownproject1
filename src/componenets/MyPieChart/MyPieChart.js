import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const MyPieChart = () => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
      ];
      
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

      const RADIAN=Math.PI/180;
      const renderCustomizedLabel=({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          percent,
          index
      })=>{
        const redius=innerRadius+(outerRadius-innerRadius)*.5;
        const x= cx +redius*Math.cos(-midAngle*RADIAN);
        const y= cy +redius*Math.sin(-midAngle*RADIAN);

        return(
            <text 
                x={x}
                y={y}
                fill ="white"
                textAnchor={x>cx?"start":"end"}
                dominantBaseline="central"
                >
                    {`${(percent*100).toFixed(0)}%`}
                </text>
        );
      };
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
        </PieChart>
        </div>
    );
};

export default MyPieChart;