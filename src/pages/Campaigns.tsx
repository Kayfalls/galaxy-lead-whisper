import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Target, 
  Play, 
  Pause, 
  MoreHorizontal,
  Calendar,
  Users,
  Phone
} from "lucide-react";

export default function Campaigns() {
  const [campaigns] = useState([
    {
      id: 1,
      name: "Q4 Enterprise Outreach",
      description: "Targeting Fortune 500 companies for enterprise solutions",
      status: "Active",
      progress: 67,
      totalLeads: 450,
      contacted: 302,
      qualified: 89,
      startDate: "2024-01-15",
      targetAudience: "Enterprise",
      script: "Hi, this is [Agent Name] from TechCorp..."
    },
    {
      id: 2,
      name: "SMB Holiday Campaign",
      description: "Holiday season promotions for small-medium businesses",
      status: "Active", 
      progress: 45,
      totalLeads: 320,
      contacted: 144,
      qualified: 32,
      startDate: "2024-01-20",
      targetAudience: "SMB",
      script: "Good morning! I'm calling about our holiday special..."
    },
    {
      id: 3,
      name: "Product Demo Series",
      description: "Demo-focused outreach for new product launch",
      status: "Paused",
      progress: 23,
      totalLeads: 200,
      contacted: 46,
      qualified: 12,
      startDate: "2024-01-10",
      targetAudience: "Mixed",
      script: "Hi there! I'd love to show you our new features..."
    }
  ]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campaign Management</h1>
          <p className="text-muted-foreground">
            Create and manage your AI-powered lead generation campaigns
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-background">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
              <DialogDescription>
                Set up a new AI lead generation campaign with target audience and call scripts.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Campaign Name</Label>
                  <Input id="name" placeholder="Enter campaign name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background">
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="smb">Small-Medium Business</SelectItem>
                      <SelectItem value="startup">Startups</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your campaign goals and target market" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="script">Call Script</Label>
                <Textarea 
                  id="script" 
                  placeholder="Enter the AI agent's call script template..." 
                  className="min-h-24"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dailyLimit">Daily Call Limit</Label>
                  <Input id="dailyLimit" type="number" placeholder="50" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Create Campaign</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Campaigns Grid */}
      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{campaign.name}</CardTitle>
                    <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <CardDescription>{campaign.description}</CardDescription>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    {campaign.status === "Active" ? (
                      <>
                        <Pause className="w-4 h-4 mr-1" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-1" />
                        Resume
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Campaign Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                    <Users className="w-4 h-4" />
                    Total Leads
                  </div>
                  <div className="text-2xl font-semibold">{campaign.totalLeads}</div>
                </div>
                
                <div className="text-center p-3 border rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                    <Phone className="w-4 h-4" />
                    Contacted
                  </div>
                  <div className="text-2xl font-semibold">{campaign.contacted}</div>
                </div>
                
                <div className="text-center p-3 border rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                    <Target className="w-4 h-4" />
                    Qualified
                  </div>
                  <div className="text-2xl font-semibold">{campaign.qualified}</div>
                </div>
                
                <div className="text-center p-3 border rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    Start Date
                  </div>
                  <div className="text-sm font-semibold">{campaign.startDate}</div>
                </div>
              </div>
              
              {/* Campaign Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Target Audience:</span>
                  <span className="ml-2 font-medium">{campaign.targetAudience}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Conversion Rate:</span>
                  <span className="ml-2 font-medium">
                    {((campaign.qualified / campaign.contacted) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}