import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Phone,
  Video,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  Bell,
  Settings
} from "lucide-react";

export default function Calendar() {
  const events = [
    {
      id: 1,
      title: "Call with TechCorp Solutions",
      type: "Call",
      time: "10:00 AM - 10:30 AM",
      date: "Today",
      contact: "John Smith",
      company: "TechCorp Solutions",
      location: "Phone Call",
      status: "Confirmed",
      priority: "High"
    },
    {
      id: 2,
      title: "Product Demo - Healthcare Plus",
      type: "Meeting",
      time: "2:00 PM - 3:00 PM", 
      date: "Today",
      contact: "Mike Wilson",
      company: "Healthcare Plus",
      location: "Video Conference",
      status: "Confirmed",
      priority: "High"
    },
    {
      id: 3,
      title: "Follow-up Call - Global Manufacturing",
      type: "Call",
      time: "11:00 AM - 11:15 AM",
      date: "Tomorrow",
      contact: "Sarah Johnson", 
      company: "Global Manufacturing",
      location: "Phone Call",
      status: "Pending",
      priority: "Medium"
    },
    {
      id: 4,
      title: "Team Stand-up Meeting",
      type: "Internal",
      time: "9:00 AM - 9:30 AM",
      date: "Tomorrow",
      contact: "Sales Team",
      company: "Internal",
      location: "Conference Room A",
      status: "Confirmed",
      priority: "Low"
    }
  ];

  const calendarStats = [
    { title: "Today's Meetings", value: "8", change: "+2", icon: CalendarIcon },
    { title: "This Week", value: "24", change: "+6", icon: Clock },
    { title: "Pending Confirmations", value: "3", change: "-1", icon: Bell },
    { title: "Success Rate", value: "94%", change: "+2%", icon: Users },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Call': return Phone;
      case 'Meeting': return Video;
      case 'Internal': return Users;
      default: return CalendarIcon;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Pending': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'Cancelled': return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 font-semibold';
      case 'Medium': return 'text-yellow-600 font-medium';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground p-6 rounded-lg shadow-elegant">
        <h2 className="text-3xl font-bold">Calendar & Scheduling</h2>
        <p className="opacity-90 mt-2">Manage appointments, calls, and meetings with your prospects</p>
      </div>

      {/* Calendar Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {calendarStats.map((stat) => (
          <Card key={stat.title} className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="agenda" className="space-y-6">
        <TabsList className="bg-secondary/50 backdrop-blur-sm">
          <TabsTrigger value="agenda">Daily Agenda</TabsTrigger>
          <TabsTrigger value="week">Week View</TabsTrigger>
          <TabsTrigger value="month">Month View</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Calls</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="agenda" className="space-y-6">
          {/* Quick Actions */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button size="sm" className="bg-gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input placeholder="Search appointments..." className="flex-1 bg-background" />
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Calendar Navigation */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h3 className="text-xl font-semibold">January 2024</h3>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Today
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Today's Events */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Your appointments and calls for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.filter(event => event.date === "Today").map((event) => {
                  const TypeIcon = getTypeIcon(event.type);
                  return (
                    <div key={event.id} className="p-4 border rounded-lg bg-background hover:shadow-md transition-all duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                            <TypeIcon className="h-6 w-6" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-foreground">{event.title}</h4>
                              <Badge className={getStatusColor(event.status)}>
                                {event.status}
                              </Badge>
                              <Badge variant="outline" className={getPriorityColor(event.priority)}>
                                {event.priority}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {event.contact}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </div>
                            </div>

                            <p className="text-sm font-medium text-foreground">{event.company}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            Join
                          </Button>
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                          <Button size="sm" variant="outline">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Your schedule for the next few days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.filter(event => event.date !== "Today").map((event) => {
                  const TypeIcon = getTypeIcon(event.type);
                  return (
                    <div key={event.id} className="p-4 border rounded-lg bg-background/50 hover:bg-background transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <TypeIcon className="h-5 w-5 text-primary" />
                          <div>
                            <h4 className="font-medium text-foreground">{event.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{event.date} • {event.time}</span>
                              <span>{event.contact}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(event.status)}>
                            {event.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Week View
              </CardTitle>
              <CardDescription>Your weekly schedule overview</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Weekly calendar view will be integrated here with API connections.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Month View
              </CardTitle>
              <CardDescription>Monthly calendar with all appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Monthly calendar view will be integrated here with API connections.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Scheduled Calls
              </CardTitle>
              <CardDescription>All your upcoming sales calls and follow-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.filter(event => event.type === "Call").map((event) => (
                  <div key={event.id} className="p-4 border-l-4 border-l-primary bg-primary/5 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.company}</p>
                        <div className="mt-2 flex items-center gap-4 text-sm">
                          <span className="text-foreground">{event.date} • {event.time}</span>
                            <Badge className={getStatusColor(event.status)}>
                              {event.status}
                            </Badge>
                        </div>
                      </div>
                      <Button size="sm" className="bg-gradient-primary">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>Calendar Settings</CardTitle>
              <CardDescription>Configure your calendar and scheduling preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Calendar configuration and integration settings will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}