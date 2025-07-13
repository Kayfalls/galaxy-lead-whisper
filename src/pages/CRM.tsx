import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  Building, 
  Phone, 
  Mail, 
  Calendar,
  TrendingUp,
  DollarSign,
  Star,
  MessageSquare,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  MoreHorizontal
} from "lucide-react";

export default function CRM() {
  const contacts = [
    {
      id: 1,
      name: "John Smith",
      company: "TechCorp Solutions",
      title: "CTO", 
      email: "john.smith@techcorp.com",
      phone: "+1 (555) 123-4567",
      leadScore: 85,
      status: "Hot Lead",
      lastContact: "2024-01-15",
      value: "$45,000",
      stage: "Proposal",
      source: "Cold Call",
      tags: ["Enterprise", "Decision Maker"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Global Manufacturing", 
      title: "Procurement Director",
      email: "s.johnson@globalmfg.com",
      phone: "+1 (555) 987-6543",
      leadScore: 72,
      status: "Warm Lead",
      lastContact: "2024-01-14",
      value: "$32,000",
      stage: "Negotiation",
      source: "Referral",
      tags: ["Manufacturing", "Budget Approved"]
    },
    {
      id: 3,
      name: "Mike Wilson",
      company: "Healthcare Plus",
      title: "IT Manager",
      email: "m.wilson@healthcareplus.com", 
      phone: "+1 (555) 456-7890",
      leadScore: 92,
      status: "Hot Lead",
      lastContact: "2024-01-16",
      value: "$78,000",
      stage: "Closed Won",
      source: "Website",
      tags: ["Healthcare", "Large Account"]
    }
  ];

  const crmStats = [
    { title: "Total Contacts", value: "2,847", change: "+12%", icon: Users },
    { title: "Active Deals", value: "127", change: "+8%", icon: DollarSign },
    { title: "Pipeline Value", value: "$1.2M", change: "+23%", icon: TrendingUp },
    { title: "Conversion Rate", value: "24%", change: "+5%", icon: Star },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot Lead': return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'Warm Lead': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'Cold Lead': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Customer': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Prospecting': return 'text-blue-600';
      case 'Proposal': return 'text-yellow-600';
      case 'Negotiation': return 'text-orange-600';
      case 'Closed Won': return 'text-green-600';
      case 'Closed Lost': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground p-6 rounded-lg shadow-elegant">
        <h2 className="text-3xl font-bold">CRM Dashboard</h2>
        <p className="opacity-90 mt-2">Manage your customer relationships and sales pipeline</p>
      </div>

      {/* CRM Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {crmStats.map((stat) => (
          <Card key={stat.title} className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="contacts" className="space-y-6">
        <TabsList className="bg-secondary/50 backdrop-blur-sm">
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="deals">Deals Pipeline</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="space-y-6">
          {/* Search and Actions */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Contact Management
                </CardTitle>
                <Button className="bg-gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Contact
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input placeholder="Search contacts..." className="flex-1 bg-background" />
                <Select>
                  <SelectTrigger className="w-40 bg-background">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="hot">Hot Leads</SelectItem>
                    <SelectItem value="warm">Warm Leads</SelectItem>
                    <SelectItem value="cold">Cold Leads</SelectItem>
                    <SelectItem value="customer">Customers</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contacts List */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>Contact Database</CardTitle>
              <CardDescription>Manage your prospects and customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact.id} className="p-4 border rounded-lg bg-background hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{contact.name}</h4>
                            <Badge className={getStatusColor(contact.status)}>
                              {contact.status}
                            </Badge>
                            <Badge variant="outline" className={getStageColor(contact.stage)}>
                              {contact.stage}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Building className="h-4 w-4" />
                            <span>{contact.company}</span>
                            <span>•</span>
                            <span>{contact.title}</span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {contact.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {contact.phone}
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Last contact: {contact.lastContact}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              <span className="font-semibold text-green-600">{contact.value}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              <span className="font-semibold">Score: {contact.leadScore}</span>
                            </div>
                          </div>

                          <div className="flex gap-1 mt-2">
                            {contact.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deals">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                Sales Pipeline
              </CardTitle>
              <CardDescription>Track your deals through the sales process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                  <h4 className="font-semibold text-blue-700">Prospecting</h4>
                  <p className="text-2xl font-bold text-blue-800">12</p>
                  <p className="text-sm text-blue-600">$180K</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-l-yellow-500">
                  <h4 className="font-semibold text-yellow-700">Proposal</h4>
                  <p className="text-2xl font-bold text-yellow-800">8</p>
                  <p className="text-sm text-yellow-600">$340K</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-l-orange-500">
                  <h4 className="font-semibold text-orange-700">Negotiation</h4>
                  <p className="text-2xl font-bold text-orange-800">5</p>
                  <p className="text-sm text-orange-600">$420K</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                  <h4 className="font-semibold text-green-700">Closed Won</h4>
                  <p className="text-2xl font-bold text-green-800">15</p>
                  <p className="text-sm text-green-600">$680K</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="companies">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Company Database
              </CardTitle>
              <CardDescription>Manage company information and relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Company management features will be integrated here with API connections.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Activity Timeline
              </CardTitle>
              <CardDescription>Track all interactions and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Activity tracking and timeline features will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                CRM Reports
              </CardTitle>
              <CardDescription>Analytics and performance insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Comprehensive reporting dashboard will be integrated here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}