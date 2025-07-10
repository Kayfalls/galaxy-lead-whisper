import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Phone, PhoneCall, PhoneOff, Clock, Users, TrendingUp } from "lucide-react";

export default function CallExecution() {
  const activeCallsData = [
    { id: 1, contact: "John Smith", company: "Tech Corp", status: "in-progress", duration: "02:34", stage: "Qualification" },
    { id: 2, contact: "Sarah Johnson", company: "Marketing Inc", status: "in-progress", duration: "01:45", stage: "Presentation" },
    { id: 3, contact: "Mike Wilson", company: "Sales Solutions", status: "queued", duration: "00:00", stage: "Intro" },
  ];

  const campaignStats = [
    { title: "Calls Today", value: "147", icon: Phone, change: "+12%" },
    { title: "Success Rate", value: "34%", icon: TrendingUp, change: "+5%" },
    { title: "Avg Duration", value: "3:42", icon: Clock, change: "-8%" },
    { title: "Active Agents", value: "8", icon: Users, change: "+2" },
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Call Execution</h2>
        <p className="text-muted-foreground">Monitor and manage active AI voice campaigns</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {campaignStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Calls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5" />
            Active Calls
          </CardTitle>
          <CardDescription>Real-time monitoring of ongoing AI voice calls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeCallsData.map((call) => (
              <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${call.status === 'in-progress' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                  <div>
                    <h4 className="font-medium">{call.contact}</h4>
                    <p className="text-sm text-muted-foreground">{call.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={call.status === 'in-progress' ? 'default' : 'secondary'}>
                    {call.stage}
                  </Badge>
                  <span className="text-sm font-mono">{call.duration}</span>
                  <Button size="sm" variant="outline">
                    <PhoneOff className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campaign Progress */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Campaign Progress</CardTitle>
            <CardDescription>Current campaign completion status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Q4 Lead Generation</span>
                <span>68%</span>
              </div>
              <Progress value={68} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Enterprise Outreach</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Follow-up Campaign</span>
                <span>82%</span>
              </div>
              <Progress value={82} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Campaign control and management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full">Start New Campaign</Button>
            <Button variant="outline" className="w-full">Pause All Calls</Button>
            <Button variant="outline" className="w-full">Export Call Logs</Button>
            <Button variant="outline" className="w-full">Schedule Campaign</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}