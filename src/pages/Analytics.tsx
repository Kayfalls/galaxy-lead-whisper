import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Users, Phone, Target, Clock } from "lucide-react";

export default function Analytics() {
  const performanceMetrics = [
    { title: "Total Calls", value: "2,847", change: "+18%", icon: Phone },
    { title: "Conversion Rate", value: "12.4%", change: "+2.3%", icon: Target },
    { title: "Avg Call Duration", value: "4:32", change: "-12s", icon: Clock },
    { title: "Lead Quality Score", value: "8.2/10", change: "+0.5", icon: TrendingUp },
  ];

  const campaignResults = [
    { name: "Q4 Enterprise", calls: 450, conversions: 67, rate: "14.9%" },
    { name: "SMB Outreach", calls: 823, conversions: 89, rate: "10.8%" },
    { name: "Follow-up Series", calls: 234, conversions: 34, rate: "14.5%" },
    { name: "Product Demo", calls: 156, conversions: 28, rate: "17.9%" },
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">Comprehensive insights into your AI calling performance</p>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{metric.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Call Volume by Day
                </CardTitle>
                <CardDescription>Daily call statistics for the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end justify-between space-x-2">
                  {[120, 145, 167, 134, 189, 156, 178].map((height, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div 
                        className="w-8 bg-primary rounded-t" 
                        style={{ height: `${(height / 200) * 100}%` }}
                      />
                      <span className="text-xs mt-2">
                        {new Date(Date.now() - (6-i) * 24 * 60 * 60 * 1000).toLocaleDateString('en', { weekday: 'short' })}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Lead progression through the sales process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Calls Made</span>
                    <span>2,847</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Interested Prospects</span>
                    <span>891</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '31%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Qualified Leads</span>
                    <span>354</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '12%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Conversions</span>
                    <span>142</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '5%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Detailed results for each active campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignResults.map((campaign) => (
                  <div key={campaign.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{campaign.name}</h4>
                      <p className="text-sm text-muted-foreground">{campaign.calls} calls made</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{campaign.conversions} conversions</div>
                      <div className="text-sm text-green-600">{campaign.rate} rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Long-term analytics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Trend analysis charts and detailed performance insights will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>AI Performance Metrics</CardTitle>
              <CardDescription>Voice AI effectiveness and optimization opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed AI performance metrics and recommendations for improvement.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}