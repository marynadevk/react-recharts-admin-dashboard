import { FaRegUser } from 'react-icons/fa';

const chartData = [
  { name: 'Sun', users: 900 },
  { name: 'Mon', users: 200 },
  { name: 'Tue', users: 500 },
  { name: 'Wed', users: 700 },
  { name: 'Thu', users: 300 },
  { name: 'Fri', users: 1550 },
  { name: 'Sat', users: 750 },
];
export const chartBoxUserData = {
  color: '#fb6107',
  icon: <FaRegUser fill='#fb6107' size={30}/>,
  title: 'Total Users',
  number: chartData.reduce((acc, cur) => acc + cur.users, 0),
  dataKey: 'users',
  percentage: 41,
  chartData,
};
