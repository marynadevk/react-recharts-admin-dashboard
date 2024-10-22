import { SlBasket } from 'react-icons/sl';

const chartData = [
  { name: 'Sun', products: 4300 },
  { name: 'Mon', products: 6040 },
  { name: 'Tue', products: 2500 },
  { name: 'Wed', products: 7400 },
  { name: 'Thu', products: 3400 },
  { name: 'Fri', products: 2500 },
  { name: 'Sat', products: 1450 },
];
export const chartBoxProductData = {
  color: '#f3de2c',
  icon: <SlBasket fill='#f3de2c' size={30}/>,
  title: 'Total Products',
  number: chartData.reduce((acc, cur) => acc + cur.products, 0),
  dataKey: 'products',
  percentage: 21,
  chartData,
};
