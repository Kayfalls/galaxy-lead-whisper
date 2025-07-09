import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Users, 
  TrendingUp, 
  Clock,
  PhoneCall,
  UserCheck,
  Target,
  BarChart3
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Active Campaigns",
      value: "12",
      change: "+2.5%",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12.3%", 
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Calls Today",
      value: "156",
      change: "+8.1%",
      icon: Phone,
      color: "text-orange-600"
    },
    {
      title: "Conversion Rate",
      value: "23.4%",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const recentCampaigns = [
    { name: "Q4 Enterprise Outreach", status: "Active", progress: 67, calls: 234 },
    { name: "SMB Holiday Campaign", status: "Active", progress: 45, calls: 189 },
    { name: "Product Demo Series", status: "Paused", progress: 23, calls: 87 },
    { name: "Renewal Campaign", status: "Active", progress: 89, calls: 312 }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your campaigns.
          </p>
        </div>
        <Button className="gap-2">
          <Phone className="w-4 h-4" />
          New Campaign
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Campaigns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Active Campaigns
            </CardTitle>
            <CardDescription>
              Monitor your ongoing lead generation campaigns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCampaigns.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{campaign.name}</h4>
                    <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className="text-sm text-muted-foreground">Calls Made</div>
                  <div className="font-semibold">{campaign.calls}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest system events and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <PhoneCall className="w-4 h-4 mt-1 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Call completed successfully</p>
                  <p className="text-xs text-muted-foreground">Enterprise Outreach campaign • 2 min ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <UserCheck className="w-4 h-4 mt-1 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New qualified lead</p>
                  <p className="text-xs text-muted-foreground">SMB Holiday Campaign • 15 min ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <BarChart3 className="w-4 h-4 mt-1 text-purple-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Weekly report generated</p>
                  <p className="text-xs text-muted-foreground">Performance analytics • 1 hour ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <Target className="w-4 h-4 mt-1 text-orange-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Campaign optimization suggested</p>
                  <p className="text-xs text-muted-foreground">Product Demo Series • 2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}