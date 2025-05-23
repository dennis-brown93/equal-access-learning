
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Users, CheckCircle } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      icon: DollarSign,
      text: "Jane donated ₦5,000 to 'Girls in STEM'",
      time: "3h ago",
      type: "donation"
    },
    {
      icon: Users,
      text: "New volunteer: Bola from Abuja",
      time: "1 day ago",
      type: "volunteer"
    },
    {
      icon: CheckCircle,
      text: "Library project in Enugu marked as completed",
      time: "2 days ago",
      type: "project"
    },
    {
      icon: DollarSign,
      text: "Kemi made a recurring donation of ₦10,000",
      time: "3 days ago",
      type: "donation"
    },
    {
      icon: Users,
      text: "5 new volunteers approved this week",
      time: "1 week ago",
      type: "volunteer"
    }
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case "donation": return "text-green-600";
      case "volunteer": return "text-blue-600";
      case "project": return "text-purple-600";
      default: return "text-gray-600";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex items-start space-x-3">
                <Icon className={`h-5 w-5 mt-0.5 ${getActivityColor(activity.type)}`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
