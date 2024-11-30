"use client";

import PropTypes from "prop-types";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TalimDonutChart = ({
  data1,
  data2,
  innerRadius = 40,
  outerRadius = 60,
  startAngle = 90,
  endAngle = 450,
  mainTitle = "তালিম বিষয়",
  chart1Title = "তালিম ১",
  chart2Title = "তালিম ২",
}) => {
  return (
    <div className=" w-full rounded-lg bg-white shadow-lg border border-gray-200 grow">
      {/* Main Title */}
      <div className="p-6 text-center border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800">{mainTitle}</h2>
      </div>

      {/* Charts Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart 1 */}
        <div className="rounded-lg bg-gray-50 shadow-sm ">
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
            {chart1Title}
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                dataKey="value"
                startAngle={startAngle}
                endAngle={endAngle}
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell1-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend align="center" verticalAlign="bottom" height={20} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2 */}
        <div className="rounded-lg bg-gray-50 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
            {chart2Title}
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                dataKey="value"
                startAngle={startAngle}
                endAngle={endAngle}
              >
                {data2.map((entry, index) => (
                  <Cell key={`cell2-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend align="center" verticalAlign="bottom" height={20} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

TalimDonutChart.propTypes = {
  data1: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  data2: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  mainTitle: PropTypes.string,
  chart1Title: PropTypes.string,
  chart2Title: PropTypes.string,
};

export default TalimDonutChart;
