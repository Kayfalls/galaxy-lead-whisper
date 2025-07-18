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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Welcome back! Here's what's happening with your campaigns.
            </p>
          </div>
          <Button className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90">
            <Phone className="w-4 h-4" />
            New Campaign
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="p-2 rounded-lg bg-primary/10">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-green-600 font-medium">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Campaigns */}
          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                Active Campaigns
              </CardTitle>
              <CardDescription className="text-base">
                Monitor your ongoing lead generation campaigns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentCampaigns.map((campaign, index) => (
                <div key={index} className="flex items-center justify-between p-5 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border-0 hover:shadow-md transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-semibold text-lg">{campaign.name}</h4>
                      <Badge 
                        variant={campaign.status === "Active" ? "default" : "secondary"}
                        className="shadow-sm"
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} className="h-3 bg-muted/50" />
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-sm text-muted-foreground mb-1">Calls Made</div>
                    <div className="text-2xl font-bold text-primary">{campaign.calls}</div>
                  </div>
                </div>
              ))}
            </CardContent>
        </Card>

          {/* Recent Activity */}
          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                Recent Activity
              </CardTitle>
              <CardDescription className="text-base">
                Latest system events and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-50/50 rounded-lg border-l-4 border-green-500">
                  <div className="p-2 rounded-lg bg-green-100">
                    <PhoneCall className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Call completed successfully</p>
                    <p className="text-sm text-muted-foreground">Enterprise Outreach campaign • 2 min ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-lg border-l-4 border-blue-500">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">New qualified lead</p>
                    <p className="text-sm text-muted-foreground">SMB Holiday Campaign • 15 min ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-50/50 rounded-lg border-l-4 border-purple-500">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Weekly report generated</p>
                    <p className="text-sm text-muted-foreground">Performance analytics • 1 hour ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-50/50 rounded-lg border-l-4 border-orange-500">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <Target className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Campaign optimization suggested</p>
                    <p className="text-sm text-muted-foreground">Product Demo Series • 2 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}