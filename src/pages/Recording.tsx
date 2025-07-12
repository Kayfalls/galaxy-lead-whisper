import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Mic, Play, Pause, Download, Search, Filter, Calendar } from "lucide-react";

export default function Recording() {
  const recordings = [
    {
      id: 1,
      contact: "John Smith",
      company: "TechCorp Solutions",
      date: "2024-01-15",
      time: "10:30 AM",
      duration: "4:32",
      status: "Completed",
      quality: "High",
      fileSize: "2.1 MB",
    },
    {
      id: 2,
      contact: "Sarah Johnson",
      company: "Global Manufacturing",
      date: "2024-01-15",
      time: "11:15 AM",
      duration: "2:18",
      status: "Completed",
      quality: "Medium",
      fileSize: "1.4 MB",
    },
    {
      id: 3,
      contact: "Mike Wilson",
      company: "Healthcare Plus",
      date: "2024-01-14",
      time: "2:45 PM",
      duration: "6:45",
      status: "Processing",
      quality: "High",
      fileSize: "3.8 MB",
    },
  ];

  const recordingStats = [
    { title: "Total Recordings", value: "1,247", change: "+23%" },
    { title: "Storage Used", value: "2.4 GB", change: "+15%" },
    { title: "Avg Duration", value: "4:12", change: "-8%" },
    { title: "Success Rate", value: "98.5%", change: "+2%" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'Processing': return 'secondary';
      case 'Failed': return 'destructive';
      default: return 'outline';
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'High': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Call Recording</h2>
        <p className="text-muted-foreground">Manage and review recorded calls</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {recordingStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Mic className="h-4 w-4 text-muted-foreground" />
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

      <Tabs defaultValue="recordings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="recordings">Recordings</TabsTrigger>
          <TabsTrigger value="settings">Recording Settings</TabsTrigger>
          <TabsTrigger value="storage">Storage Management</TabsTrigger>
        </TabsList>

        <TabsContent value="recordings" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <CardTitle>Search Recordings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Search by contact, company, or date..." className="w-full" />
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
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recordings List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Recordings</CardTitle>
              <CardDescription>Latest call recordings with playback controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recordings.map((recording) => (
                  <div key={recording.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${getQualityColor(recording.quality)}`} />
                      <div>
                        <h4 className="font-medium">{recording.contact}</h4>
                        <p className="text-sm text-muted-foreground">{recording.company}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-xs text-muted-foreground">{recording.date} at {recording.time}</p>
                          <span className="text-xs text-muted-foreground">•</span>
                          <p className="text-xs text-muted-foreground">{recording.fileSize}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium">{recording.duration}</div>
                        <div className="text-xs text-muted-foreground">{recording.quality} Quality</div>
                      </div>
                      <Badge variant={getStatusColor(recording.status)}>
                        {recording.status}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Recording Settings</CardTitle>
              <CardDescription>Configure call recording preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Recording settings configuration will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storage">
          <Card>
            <CardHeader>
              <CardTitle>Storage Management</CardTitle>
              <CardDescription>Manage recording storage and retention policies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Storage management features will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}