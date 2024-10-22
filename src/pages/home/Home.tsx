import { BarChartBox, ChartBox, TopBox } from '../../components';
import { BigChartBox } from '../../components/bigChartBox/BigChartBox';
import { PieChartBox } from '../../components/pieChartBox/PieChartBox';
import {
  barChartBoxRevenueData,
  barChartBoxVisitData,
  chartBoxConversionData,
  chartBoxProductData,
  chartRevenueData,
  chartBoxUserData,
} from '../../data';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUserData} />
      </div>
      <div className="box box3"><ChartBox {...chartBoxProductData} /></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5">
      <ChartBox {...chartBoxConversionData} />
      </div>
      <div className="box box6"><ChartBox {...chartRevenueData} /></div>
      <div className="box box7"><BigChartBox /></div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisitData} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenueData} />
      </div>
    </div>
  );
};
