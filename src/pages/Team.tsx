import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, Settings, Shield, Crown, User } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago",
      campaigns: 12,
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Mike Wilson",
      email: "mike.wilson@company.com",
      role: "Campaign Manager",
      status: "Active",
      lastActive: "30 minutes ago",
      campaigns: 8,
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Lisa Chen",
      email: "lisa.chen@company.com",
      role: "Sales Rep",
      status: "Active",
      lastActive: "1 hour ago",
      campaigns: 5,
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@company.com",
      role: "Sales Rep",
      status: "Inactive",
      lastActive: "2 days ago",
      campaigns: 3,
      avatar: "/placeholder.svg",
    },
  ];

  const teamStats = [
    { title: "Total Members", value: "12", change: "+2", icon: Users },
    { title: "Active Users", value: "9", change: "+1", icon: User },
    { title: "Campaigns Managed", value: "28", change: "+5", icon: Settings },
    { title: "Admin Users", value: "3", change: "0", icon: Shield },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Admin': return Crown;
      case 'Campaign Manager': return Settings;
      default: return User;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Admin': return 'default';
      case 'Campaign Manager': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Team</h2>
          <p className="text-muted-foreground">Manage team members and permissions</p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {teamStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+{stat.change}</span> this month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="members" className="space-y-6">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Members
              </CardTitle>
              <CardDescription>Manage your team members and their access levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => {
                  const RoleIcon = getRoleIcon(member.role);
                  return (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <RoleIcon className="h-3 w-3" />
                            <span className="text-xs text-muted-foreground">{member.campaigns} campaigns</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge variant={getRoleBadge(member.role)}>
                            {member.role}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {member.status === 'Active' ? `Active ${member.lastActive}` : 'Inactive'}
                          </p>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${member.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`} />
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  Admin
                </CardTitle>
                <CardDescription>Full system access and management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Manage all campaigns</li>
                  <li>• User management</li>
                  <li>• System settings</li>
                  <li>• Billing access</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Campaign Manager
                </CardTitle>
                <CardDescription>Campaign creation and management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Create campaigns</li>
                  <li>• Edit campaign settings</li>
                  <li>• View analytics</li>
                  <li>• Manage leads</li>
                  <li>• Export data</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Sales Rep
                </CardTitle>
                <CardDescription>Basic access to assigned campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• View assigned campaigns</li>
                  <li>• Access lead data</li>
                  <li>• Basic reporting</li>
                  <li>• Call monitoring</li>
                  <li>• Contact management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Team Activity</CardTitle>
              <CardDescription>Recent team member activities and login history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border-l-4 border-blue-500 bg-blue-50">
                  <div>
                    <p className="font-medium">Sarah Johnson logged in</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <Badge variant="outline">Login</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border-l-4 border-green-500 bg-green-50">
                  <div>
                    <p className="font-medium">Mike Wilson created new campaign</p>
                    <p className="text-sm text-muted-foreground">4 hours ago</p>
                  </div>
                  <Badge variant="outline">Campaign</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <div>
                    <p className="font-medium">Lisa Chen updated lead status</p>
                    <p className="text-sm text-muted-foreground">6 hours ago</p>
                  </div>
                  <Badge variant="outline">Lead Update</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Team Settings</CardTitle>
              <CardDescription>Configure team-wide settings and policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Configure Permissions</Button>
              <Button variant="outline">Set Login Policies</Button>
              <Button variant="outline">Manage API Access</Button>
              <Button variant="outline">Export Team Data</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}