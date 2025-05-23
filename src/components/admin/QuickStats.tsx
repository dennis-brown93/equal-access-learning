
import { DollarSign, Users, TrendingUp, BookOpen } from "lucide-react";
import StatsCard from "./StatsCard";

const QuickStats = () => {
  const stats = [
    {
      title: "Total Donations",
      value: "₦2,450,000",
      trend: "+12% this month",
      icon: DollarSign,
      description: "All-time donations received"
    },
    {
      title: "Active Volunteers",
      value: "247",
      trend: "+8% increase",
      icon: Users,
      description: "Currently registered volunteers"
    },
    {
      title: "Monthly Donations",
      value: "₦180,000",
      trend: "+5% from last month",
      icon: TrendingUp,
      description: "This month's total"
    },
    {
      title: "Projects Funded",
      value: "34",
      trend: "6 new this quarter",
      icon: BookOpen,
      description: "Initiatives successfully funded"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default QuickStats;
