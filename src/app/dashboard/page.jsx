import AmoliChart from "@/components/AmoliChart";
import {
  AmoliChartData,
  TalimDonutChartData1,
  TalimDonutChartData2,
} from "@/app/data/data";
import TalimDonutChart from "@/components/TalimBisoyChart";
import MoktobBisoyTally from "@/components/MoktobBisoyTally";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <AmoliChart
        data={AmoliChartData}
        innerRadius={80}
        outerRadius={120}
        startAngle={90}
        endAngle={450}
      />
      <TalimDonutChart
        data1={TalimDonutChartData1}
        data2={TalimDonutChartData2}
        innerRadius={60}
        outerRadius={100}
        startAngle={90}
        endAngle={450}
      />
      <MoktobBisoyTally />
      <MoktobBisoyTally />
      
    </div>
  );
};

export default Dashboard;
