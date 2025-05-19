import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface PerformanceData {
  name: string;
  rating: number;
  kd: number;
  impact: number;
}

interface PerformanceChartProps {
  data: PerformanceData[];
}

const PerformanceChart = ({ data }: PerformanceChartProps) => {
  return (
    <div className="bg-esports-darkGray rounded-md p-4">
      <h3 className="text-white text-lg font-bold mb-4">Performance Trends</h3>
      <div className="w-full h-48 sm:h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="name" 
              stroke="#888"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis 
              stroke="#888"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1A1A', 
                borderColor: '#FF0000',
                color: '#FFF',
                fontSize: '12px'
              }} 
            />
            <Legend 
              wrapperStyle={{
                fontSize: '12px',
                paddingTop: '10px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="rating" 
              stroke="#00FF00" 
              activeDot={{ r: 6 }} 
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="kd" 
              stroke="#0088FE" 
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="impact" 
              stroke="#FF0000" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
