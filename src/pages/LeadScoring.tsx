import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Star, Target, Brain, Settings } from "lucide-react";

export default function LeadScoring() {
  const scoringMetrics = [
    { title: "Avg Lead Score", value: "73.2", change: "+5.4", icon: TrendingUp },
    { title: "High-Quality Leads", value: "234", change: "+18", icon: Star },
    { title: "Conversion Prediction", value: "89.2%", change: "+2.1%", icon: Target },
    { title: "Model Accuracy", value: "94.7%", change: "+1.3%", icon: Brain },
  ];

  const topLeads = [
    { name: "TechCorp Solutions", score: 95, probability: "High", industry: "Technology", value: "$125k" },
    { name: "Global Manufacturing", score: 91, probability: "High", industry: "Manufacturing", value: "$89k" },
    { name: "Healthcare Plus", score: 87, probability: "Medium", industry: "Healthcare", value: "$67k" },
    { name: "Retail Dynamics", score: 83, probability: "Medium", industry: "Retail", value: "$45k" },
    { name: "Financial Services Co", score: 79, probability: "Medium", industry: "Finance", value: "$156k" },
  ];

  const scoringFactors = [
    { factor: "Company Size", weight: 25, impact: "High" },
    { factor: "Industry Match", weight: 20, impact: "High" },
    { factor: "Budget Indicators", weight: 18, impact: "Medium" },
    { factor: "Past Interactions", weight: 15, impact: "Medium" },
    { factor: "Geographic Location", weight: 12, impact: "Low" },
    { factor: "Technology Stack", weight: 10, impact: "Low" },
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Lead Scoring</h2>
        <p className="text-muted-foreground">AI-powered lead qualification and prioritization</p>
      </div>

      {/* Scoring Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {scoringMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+{metric.change}</span> from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="leads" className="space-y-6">
        <TabsList>
          <TabsTrigger value="leads">Top Leads</TabsTrigger>
          <TabsTrigger value="model">Scoring Model</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="leads" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Highest Priority Leads
              </CardTitle>
              <CardDescription>AI-ranked leads based on conversion probability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topLeads.map((lead, index) => (
                  <div key={lead.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm font-medium text-muted-foreground">#{index + 1}</div>
                      <div>
                        <h4 className="font-medium">{lead.name}</h4>
                        <p className="text-sm text-muted-foreground">{lead.industry} • {lead.value}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold">{lead.score}</div>
                        <Badge variant={lead.probability === 'High' ? 'default' : 'secondary'}>
                          {lead.probability}
                        </Badge>
                      </div>
                      <Button size="sm">Contact</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="model" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Scoring Factors</CardTitle>
                <CardDescription>Weighted factors used in the AI scoring model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {scoringFactors.map((factor) => (
                  <div key={factor.factor} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{factor.factor}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant={factor.impact === 'High' ? 'default' : factor.impact === 'Medium' ? 'secondary' : 'outline'}>
                          {factor.impact}
                        </Badge>
                        <span>{factor.weight}%</span>
                      </div>
                    </div>
                    <Progress value={factor.weight * 4} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Performance</CardTitle>
                <CardDescription>AI model accuracy and effectiveness metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Prediction Accuracy</span>
                    <span>94.7%</span>
                  </div>
                  <Progress value={94.7} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Conversion Rate</span>
                    <span>87.3%</span>
                  </div>
                  <Progress value={87.3} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>False Positive Rate</span>
                    <span>3.2%</span>
                  </div>
                  <Progress value={3.2} />
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    <Brain className="h-4 w-4 mr-2" />
                    Retrain Model
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle>AI Insights & Recommendations</CardTitle>
              <CardDescription>Data-driven insights to improve lead qualification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900">Top Performing Segment</h4>
                <p className="text-sm text-blue-700">Technology companies with 50-200 employees show 23% higher conversion rates</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-900">Opportunity Identified</h4>
                <p className="text-sm text-yellow-700">Healthcare sector leads are underutilized - consider increased outreach</p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-900">Model Improvement</h4>
                <p className="text-sm text-green-700">Adding social media engagement data could improve accuracy by 3-5%</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Scoring Configuration
              </CardTitle>
              <CardDescription>Customize the AI scoring model parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button>Adjust Scoring Weights</Button>
                <Button variant="outline">Export Scoring Data</Button>
                <Button variant="outline">Import Custom Factors</Button>
                <Button variant="outline">Reset to Default</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}