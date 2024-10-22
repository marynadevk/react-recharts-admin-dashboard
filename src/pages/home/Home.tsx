import { BarChartBox } from '../../components/barChartBox/BarChartBox';
// import BigChartBox from '../../components/bigChartBox/BigChartBox';
// import ChartBox from '../../components/chartBox/ChartBox';
// import PieChartBox from '../../components/pieCartBox/PieChartBox';
import { TopBox } from '../../components/topBox/TopBox';
import { barChartBoxRevenueData } from '../../data';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenueData} />
      </div>
    </div>
  );
};
