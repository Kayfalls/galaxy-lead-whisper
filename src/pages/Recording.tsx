import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Mic, 
  Play, 
  Pause, 
  Download, 
  Search, 
  Filter, 
  Calendar,
  Phone,
  Clock,
  FileAudio,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Star,
  MessageSquare,
  Tag
} from "lucide-react";

export default function Recording() {
  const recordings = [
    {
      id: 1,
      contact: "John Smith",
      company: "TechCorp Solutions",
      phone: "+1 (555) 123-4567",
      date: "2024-01-15",
      time: "10:30 AM",
      duration: "4:32",
      status: "Completed",
      quality: "High",
      fileSize: "2.1 MB",
      category: "Qualified Lead",
      sentiment: "Positive",
      leadScore: 85,
      tags: ["Enterprise", "Decision Maker"],
      notes: "Interested in enterprise package, follow up in 2 days"
    },
    {
      id: 2,
      contact: "Sarah Johnson", 
      company: "Global Manufacturing",
      phone: "+1 (555) 987-6543",
      date: "2024-01-15",
      time: "11:15 AM", 
      duration: "2:18",
      status: "Completed",
      quality: "Medium",
      fileSize: "1.4 MB",
      category: "Complaint",
      sentiment: "Negative",
      leadScore: 25,
      tags: ["Support", "Billing Issue"],
      notes: "Billing dispute resolved, customer satisfied"
    },
    {
      id: 3,
      contact: "Mike Wilson",
      company: "Healthcare Plus",
      phone: "+1 (555) 456-7890",
      date: "2024-01-14",
      time: "2:45 PM",
      duration: "6:45", 
      status: "Processing",
      quality: "High",
      fileSize: "3.8 MB",
      category: "Qualified Lead",
      sentiment: "Positive",
      leadScore: 92,
      tags: ["Healthcare", "Large Account"],
      notes: "Very interested, sent proposal"
    },
    {
      id: 4,
      contact: "Lisa Chen",
      company: "Retail Solutions Inc",
      phone: "+1 (555) 321-0987",
      date: "2024-01-14",
      time: "4:20 PM",
      duration: "3:15",
      status: "Completed",
      quality: "High", 
      fileSize: "1.9 MB",
      category: "Complaint",
      sentiment: "Neutral",
      leadScore: 40,
      tags: ["Product Issue", "Escalation"],
      notes: "Product malfunction reported, replacement sent"
    }
  ];

  const recordingStats = [
    { title: "Total Recordings", value: "1,247", change: "+23%", icon: FileAudio },
    { title: "Qualified Leads", value: "342", change: "+35%", icon: TrendingUp },
    { title: "Complaints Resolved", value: "89", change: "-12%", icon: CheckCircle },
    { title: "Avg Lead Score", value: "72", change: "+8%", icon: Star },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'Processing': return 'secondary';
      case 'Failed': return 'destructive';
      default: return 'outline';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Qualified Lead': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Complaint': return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'Follow-up': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return 'text-green-600';
      case 'Negative': return 'text-red-600';
      case 'Neutral': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getLeadScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 font-bold';
    if (score >= 60) return 'text-yellow-600 font-semibold';
    return 'text-red-600';
  };

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground p-6 rounded-lg shadow-elegant">
        <h2 className="text-3xl font-bold">Call Recording Center</h2>
        <p className="opacity-90 mt-2">Advanced call analytics for lead generation and customer service</p>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {recordingStats.map((stat) => (
          <Card key={stat.title} className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span> from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="recordings" className="space-y-6">
        <TabsList className="bg-secondary/50 backdrop-blur-sm">
          <TabsTrigger value="recordings">Call Recordings</TabsTrigger>
          <TabsTrigger value="leads">Qualified Leads</TabsTrigger>
          <TabsTrigger value="complaints">Complaints</TabsTrigger>
          <TabsTrigger value="analytics">Call Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="recordings" className="space-y-6">
          {/* Enhanced Search and Filter */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Advanced Search & Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Input placeholder="Search contacts, companies..." className="bg-background" />
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="leads">Qualified Leads</SelectItem>
                    <SelectItem value="complaints">Complaints</SelectItem>
                    <SelectItem value="followup">Follow-ups</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Sentiment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sentiments</SelectItem>
                    <SelectItem value="positive">Positive</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                    <SelectItem value="negative">Negative</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Recordings List */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileAudio className="h-5 w-5 text-primary" />
                Call Recordings
              </CardTitle>
              <CardDescription>Comprehensive call analysis with lead scoring and sentiment analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recordings.map((recording) => (
                  <div key={recording.id} className="p-4 border rounded-lg bg-background hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex flex-col items-center space-y-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(recording.category)}`}>
                            {recording.category}
                          </div>
                          <div className={`text-lg font-bold ${getLeadScoreColor(recording.leadScore)}`}>
                            {recording.leadScore}
                          </div>
                          <div className="text-xs text-muted-foreground">Score</div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{recording.contact}</h4>
                            <Badge variant="outline" className={getSentimentColor(recording.sentiment)}>
                              {recording.sentiment}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-2">{recording.company}</p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {recording.phone}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {recording.date} at {recording.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {recording.duration}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {recording.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {recording.notes && (
                            <div className="bg-secondary/30 p-2 rounded text-xs text-foreground">
                              <MessageSquare className="h-3 w-3 inline mr-1" />
                              {recording.notes}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge variant={getStatusColor(recording.status)} className="mb-2">
                            {recording.status}
                          </Badge>
                          <div className="text-xs text-muted-foreground">{recording.fileSize}</div>
                        </div>
                        
                        <Separator orientation="vertical" className="h-12" />
                        
                        <div className="flex flex-col gap-2">
                          <Button size="sm" variant="outline" className="bg-gradient-primary text-primary-foreground border-primary hover:opacity-90">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leads">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Qualified Leads from Calls
              </CardTitle>
              <CardDescription>High-scoring prospects identified through call analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recordings.filter(r => r.category === "Qualified Lead").map((recording) => (
                  <div key={recording.id} className="p-4 border-l-4 border-l-green-500 bg-green-50/50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{recording.contact}</h4>
                        <p className="text-sm text-muted-foreground">{recording.company}</p>
                        <div className="mt-2 flex items-center gap-4">
                          <div className="text-lg font-bold text-green-600">{recording.leadScore}</div>
                          <div className="text-xs text-muted-foreground">Lead Score</div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-gradient-primary">
                        Follow Up
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complaints">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Customer Complaints
              </CardTitle>
              <CardDescription>Issues and resolutions tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recordings.filter(r => r.category === "Complaint").map((recording) => (
                  <div key={recording.id} className="p-4 border-l-4 border-l-red-500 bg-red-50/50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{recording.contact}</h4>
                        <p className="text-sm text-muted-foreground">{recording.company}</p>
                        <p className="text-xs text-foreground mt-2">{recording.notes}</p>
                      </div>
                      <Badge variant={recording.sentiment === "Negative" ? "destructive" : "secondary"}>
                        {recording.sentiment}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>Call Analytics Dashboard</CardTitle>
              <CardDescription>Comprehensive insights from call recordings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Sentiment Analysis</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-green-600">Positive</span>
                      <span>65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Neutral</span>
                      <span>25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-600">Negative</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Lead Conversion</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Qualified Leads</span>
                      <span className="text-green-600 font-semibold">42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Follow-ups</span>
                      <span className="text-yellow-600">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Complaints</span>
                      <span className="text-red-600">15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>Recording Settings</CardTitle>
              <CardDescription>Configure call recording and analysis preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Auto-Recording</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select recording mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Record All Calls</SelectItem>
                    <SelectItem value="outbound">Outbound Only</SelectItem>
                    <SelectItem value="manual">Manual Recording</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Lead Scoring Threshold</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Minimum score for qualified leads" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="60">60 Points</SelectItem>
                    <SelectItem value="70">70 Points</SelectItem>
                    <SelectItem value="80">80 Points</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="bg-gradient-primary">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}