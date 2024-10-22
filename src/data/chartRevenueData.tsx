import { MdOutlineAttachMoney } from 'react-icons/md';

const chartData = [
  { name: 'Sun', revenue: 420 },
  { name: 'Mon', revenue: 620 },
  { name: 'Tue', revenue: 510 },
  { name: 'Wed', revenue: 710 },
  { name: 'Thu', revenue: 430 },
  { name: 'Fri', revenue: 520 },
  { name: 'Sat', revenue: 460 },
];

const totalRevenue = chartData.reduce((acc, item) => acc + item.revenue, 0);

export const chartRevenueData = {
  color: '#ff5a5f',
  icon: <MdOutlineAttachMoney fill='#ff5a5f' size={30}/>,
  title: 'Total Revenue',
  number: `${totalRevenue}$`,
  dataKey: 'revenue',
  percentage: -22,
  chartData,
};
