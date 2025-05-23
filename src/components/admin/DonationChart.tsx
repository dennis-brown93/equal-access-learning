
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DonationChart = () => {
  const data = [
    { month: "Jan", amount: 120000 },
    { month: "Feb", amount: 150000 },
    { month: "Mar", amount: 180000 },
    { month: "Apr", amount: 140000 },
    { month: "May", amount: 200000 },
    { month: "Jun", amount: 180000 },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Monthly Donation Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`₦${value.toLocaleString()}`, "Amount"]} />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ fill: '#8884d8' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DonationChart;
