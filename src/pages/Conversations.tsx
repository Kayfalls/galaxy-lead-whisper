import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, Filter, Download, Play } from "lucide-react";

export default function Conversations() {
  const conversations = [
    {
      id: 1,
      contact: "John Smith",
      company: "TechCorp Solutions",
      date: "2024-01-15",
      duration: "4:32",
      outcome: "Qualified",
      sentiment: "Positive",
      transcript: "Good morning, John. I'm calling from...",
    },
    {
      id: 2,
      contact: "Sarah Johnson",
      company: "Global Manufacturing",
      date: "2024-01-15",
      duration: "2:18",
      outcome: "Follow-up",
      sentiment: "Neutral",
      transcript: "Hi Sarah, thank you for taking my call...",
    },
    {
      id: 3,
      contact: "Mike Wilson",
      company: "Healthcare Plus",
      date: "2024-01-14",
      duration: "6:45",
      outcome: "Not Interested",
      sentiment: "Negative",
      transcript: "Hello Mike, I hope you're having a great day...",
    },
    {
      id: 4,
      contact: "Lisa Chen",
      company: "Retail Dynamics",
      date: "2024-01-14",
      duration: "3:56",
      outcome: "Interested",
      sentiment: "Positive",
      transcript: "Hi Lisa, I'm reaching out because...",
    },
  ];

  const conversationStats = [
    { title: "Total Conversations", value: "1,247", change: "+23%" },
    { title: "Avg Duration", value: "4:12", change: "-8%" },
    { title: "Positive Sentiment", value: "67%", change: "+12%" },
    { title: "Qualified Leads", value: "312", change: "+18%" },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return 'bg-green-500';
      case 'Neutral': return 'bg-yellow-500';
      case 'Negative': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getOutcomeBadge = (outcome: string) => {
    switch (outcome) {
      case 'Qualified': return 'default';
      case 'Interested': return 'secondary';
      case 'Follow-up': return 'outline';
      default: return 'destructive';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Conversations</h2>
        <p className="text-muted-foreground">Review and analyze AI voice interactions</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {conversationStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="recent" className="space-y-6">
        <TabsList>
          <TabsTrigger value="recent">Recent Conversations</TabsTrigger>
          <TabsTrigger value="analysis">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <CardTitle>Search Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Search by contact, company, or content..." className="w-full" />
                </div>
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Conversations List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Conversations</CardTitle>
              <CardDescription>Latest AI voice interactions with prospects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversations.map((conversation) => (
                  <div key={conversation.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${getSentimentColor(conversation.sentiment)}`} />
                      <div>
                        <h4 className="font-medium">{conversation.contact}</h4>
                        <p className="text-sm text-muted-foreground">{conversation.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">{conversation.transcript.substring(0, 50)}...</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm">{conversation.date}</div>
                        <div className="text-sm text-muted-foreground">{conversation.duration}</div>
                      </div>
                      <Badge variant={getOutcomeBadge(conversation.outcome)}>
                        {conversation.outcome}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
              <CardDescription>AI-powered sentiment analysis of conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-6 border rounded-lg">
                  <div className="text-3xl font-bold text-green-600">67%</div>
                  <div className="text-sm text-muted-foreground">Positive</div>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600">21%</div>
                  <div className="text-sm text-muted-foreground">Neutral</div>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <div className="text-3xl font-bold text-red-600">12%</div>
                  <div className="text-sm text-muted-foreground">Negative</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transcripts">
          <Card>
            <CardHeader>
              <CardTitle>Full Transcripts</CardTitle>
              <CardDescription>Complete conversation transcripts with timestamps</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed conversation transcripts will be displayed here with search and filtering capabilities.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Insights</CardTitle>
              <CardDescription>AI-generated insights and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900">Common Objections</h4>
                  <p className="text-sm text-blue-700">Price concerns mentioned in 34% of conversations - consider value positioning</p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-900">Success Patterns</h4>
                  <p className="text-sm text-green-700">Conversations starting with industry-specific examples show 45% higher qualification rates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}