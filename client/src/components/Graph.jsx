import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data2 = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

const RenderLineChart = ({data}) => {
    return (
        <BarChart
        width={1000}
        height={500}
        data={data}
        margin={{
            top: 50, right: 30, left: 20, bottom: 5,
          }}
        >
        <XAxis dataKey="name" tick={false}/>
        <YAxis />
        <Tooltip />
        <Bar dataKey="searches" fill="coral"/>
        </BarChart>
    );
}
 
export default RenderLineChart;