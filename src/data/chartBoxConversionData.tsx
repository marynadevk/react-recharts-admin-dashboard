import { BiConversation } from 'react-icons/bi';

const chartData = [
  { name: 'Sun', ratio: 2.3 },
  { name: 'Mon', ratio: 2.8 },
  { name: 'Tue', ratio: 2.5 },
  { name: 'Wed', ratio: 3.0 },
  { name: 'Thu', ratio: 2.2 },
  { name: 'Fri', ratio: 2.7 },
  { name: 'Sat', ratio: 2.4 },
];

const averageRatio =
  chartData.reduce((acc, item) => acc + item.ratio, 0) / chartData.length;

export const chartBoxConversionData = {
  color: '#ccff33',
  icon: <BiConversation fill='#ccff33' size={30}/>,
  title: 'Total Ratio',
  number: averageRatio.toFixed(2),
  dataKey: 'ratio',
  percentage: 27,
  chartData: [
    { name: 'Sun', ratio: 2.3 },
    { name: 'Mon', ratio: 2.8 },
    { name: 'Tue', ratio: 2.5 },
    { name: 'Wed', ratio: 3.0 },
    { name: 'Thu', ratio: 2.2 },
    { name: 'Fri', ratio: 2.7 },
    { name: 'Sat', ratio: 2.4 },
  ],
};
