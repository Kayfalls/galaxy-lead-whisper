import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, AlertTriangle, CheckCircle, FileText, Clock, Download } from "lucide-react";

export default function Compliance() {
  const complianceStats = [
    { title: "Compliance Score", value: "94.2%", status: "Good", icon: Shield },
    { title: "DNC Violations", value: "0", status: "Clear", icon: CheckCircle },
    { title: "Pending Reviews", value: "3", status: "Action Needed", icon: AlertTriangle },
    { title: "Last Audit", value: "7 days ago", status: "Recent", icon: Clock },
  ];

  const regulations = [
    {
      name: "TCPA Compliance",
      status: "Compliant",
      lastCheck: "2024-01-15",
      description: "Telephone Consumer Protection Act compliance for automated calls",
    },
    {
      name: "DNC Registry",
      status: "Compliant",
      lastCheck: "2024-01-15",
      description: "Do Not Call Registry verification and scrubbing",
    },
    {
      name: "GDPR",
      status: "Compliant",
      lastCheck: "2024-01-14",
      description: "General Data Protection Regulation compliance",
    },
    {
      name: "CCPA",
      status: "Review Needed",
      lastCheck: "2024-01-10",
      description: "California Consumer Privacy Act compliance",
    },
  ];

  const auditLogs = [
    {
      id: 1,
      type: "DNC Check",
      timestamp: "2024-01-15 14:30",
      result: "Pass",
      details: "Checked 1,247 numbers against DNC registry",
    },
    {
      id: 2,
      type: "Consent Verification",
      timestamp: "2024-01-15 12:15",
      result: "Pass",
      details: "Verified consent for 89 new leads",
    },
    {
      id: 3,
      type: "Call Time Compliance",
      timestamp: "2024-01-15 09:00",
      result: "Warning",
      details: "3 calls made outside permitted hours",
    },
    {
      id: 4,
      type: "Data Retention",
      timestamp: "2024-01-14 23:45",
      result: "Pass",
      details: "Automated cleanup of expired data",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
      case 'Pass':
      case 'Clear':
        return 'bg-green-500';
      case 'Review Needed':
      case 'Warning':
      case 'Action Needed':
        return 'bg-yellow-500';
      default:
        return 'bg-red-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Compliant':
      case 'Pass':
      case 'Clear':
      case 'Good':
      case 'Recent':
        return 'default';
      case 'Review Needed':
      case 'Warning':
      case 'Action Needed':
        return 'secondary';
      default:
        return 'destructive';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Compliance</h2>
        <p className="text-muted-foreground">Regulatory compliance monitoring and management</p>
      </div>

      {/* Compliance Alert */}
      <Alert>
        <Shield className="h-4 w-4" />
        <AlertTitle>Compliance Status</AlertTitle>
        <AlertDescription>
          Your system is operating within regulatory guidelines. 3 items require attention.
        </AlertDescription>
      </Alert>

      {/* Compliance Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {complianceStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <Badge variant={getStatusBadge(stat.status)} className="mt-1">
                  {stat.status}
                </Badge>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="regulations">Regulations</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Compliance Dashboard
                </CardTitle>
                <CardDescription>Real-time compliance monitoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overall Compliance Score</span>
                  <span className="font-bold text-green-600">94.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Monitors</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last DNC Update</span>
                  <span className="font-bold">Today</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Consent Rate</span>
                  <span className="font-bold text-green-600">98.7%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Action Items
                </CardTitle>
                <CardDescription>Items requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-900">CCPA Review Required</h4>
                  <p className="text-sm text-yellow-700">Update privacy policy for California compliance</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900">Call Time Violations</h4>
                  <p className="text-sm text-blue-700">3 calls made outside permitted hours</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-900">DNC Scrubbing Complete</h4>
                  <p className="text-sm text-green-700">All lists verified against registry</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="regulations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Regulatory Compliance
              </CardTitle>
              <CardDescription>Status of key regulatory requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regulations.map((regulation) => (
                  <div key={regulation.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(regulation.status)}`} />
                      <div>
                        <h4 className="font-medium">{regulation.name}</h4>
                        <p className="text-sm text-muted-foreground">{regulation.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge variant={getStatusBadge(regulation.status)}>
                          {regulation.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          Last checked: {regulation.lastCheck}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Comprehensive log of compliance-related activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(log.result)}`} />
                      <div>
                        <h4 className="font-medium">{log.type}</h4>
                        <p className="text-sm text-muted-foreground">{log.details}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={getStatusBadge(log.result)}>
                        {log.result}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{log.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Compliance Reports
              </CardTitle>
              <CardDescription>Generate and download compliance documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Button className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  TCPA Compliance Report
                </Button>
                <Button className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  DNC Registry Report
                </Button>
                <Button className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  GDPR Data Processing Report
                </Button>
                <Button className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Audit Trail Export
                </Button>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Generate Custom Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}