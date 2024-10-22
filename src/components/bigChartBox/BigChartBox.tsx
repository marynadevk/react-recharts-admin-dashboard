import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './bigChartBox.scss';
import { categoriesData } from '../../data/categoriesData';

export const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={categoriesData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" stroke="#f4f4ed" fill="#f4f4ed" />
            <YAxis stroke="#f4f4ed" fill="#f4f4ed" />
            <Tooltip
              contentStyle={{ background: '#583101', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Area
              type="monotone"
              dataKey="furniture"
              stackId="1"
              stroke="#72ddf7"
              fill="#72ddf7"
            />
            <Area
              type="monotone"
              dataKey="groceries"
              stackId="1"
              stroke="#f4f4ed"
              fill="#f4f4ed"
            />
            <Area
              type="monotone"
              dataKey="appliances"
              stackId="1"
              stroke="#8093f1"
              fill="#8093f1"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
