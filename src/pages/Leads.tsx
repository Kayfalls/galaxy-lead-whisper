import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Download, 
  Upload, 
  MoreHorizontal,
  Phone,
  Mail,
  Building
} from "lucide-react";

export default function Leads() {
  const [leads] = useState([
    {
      id: 1,
      name: "John Smith",
      company: "TechCorp Inc",
      email: "john.smith@techcorp.com",
      phone: "+1 (555) 123-4567",
      status: "Qualified",
      score: 85,
      lastContact: "2024-01-15",
      campaign: "Enterprise Outreach",
      source: "Cold Call"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "StartupXYZ",
      email: "sarah@startupxyz.com", 
      phone: "+1 (555) 234-5678",
      status: "Contacted",
      score: 72,
      lastContact: "2024-01-14",
      campaign: "SMB Holiday",
      source: "Referral"
    },
    {
      id: 3,
      name: "Mike Davis",
      company: "Global Solutions",
      email: "m.davis@globalsol.com",
      phone: "+1 (555) 345-6789", 
      status: "New",
      score: 68,
      lastContact: "2024-01-13",
      campaign: "Product Demo",
      source: "Website"
    },
    {
      id: 4,
      name: "Lisa Chen",
      company: "InnovateLab",
      email: "lisa.chen@innovatelab.com",
      phone: "+1 (555) 456-7890",
      status: "Qualified",
      score: 91,
      lastContact: "2024-01-12",
      campaign: "Enterprise Outreach", 
      source: "LinkedIn"
    }
  ]);

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Qualified": return "default";
      case "Contacted": return "secondary";
      case "New": return "outline";
      default: return "secondary";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Lead Database</h1>
          <p className="text-muted-foreground">
            Manage and track your lead generation prospects
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Import
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters & Search
          </CardTitle>
          <CardDescription>
            Filter and search through your lead database
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search leads..." className="pl-10" />
            </div>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Campaign" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All Campaigns</SelectItem>
                <SelectItem value="enterprise">Enterprise Outreach</SelectItem>
                <SelectItem value="smb">SMB Holiday</SelectItem>
                <SelectItem value="demo">Product Demo</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Score Range" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All Scores</SelectItem>
                <SelectItem value="high">80+ (High)</SelectItem>
                <SelectItem value="medium">60-79 (Medium)</SelectItem>
                <SelectItem value="low">Below 60 (Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Contacts ({leads.length})</CardTitle>
          <CardDescription>
            Your prospects and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Campaign</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-sm text-muted-foreground">{lead.source}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      {lead.company}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3 h-3" />
                        {lead.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3 h-3" />
                        {lead.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(lead.status)}>
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className={`font-semibold ${getScoreColor(lead.score)}`}>
                      {lead.score}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{lead.campaign}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{lead.lastContact}</div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}