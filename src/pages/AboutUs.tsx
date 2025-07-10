import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bot, Users, Zap, Shield, Globe, Award, Mail, Phone, MapPin } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Voice Technology",
      description: "Advanced conversational AI that sounds natural and engages prospects effectively",
    },
    {
      icon: Zap,
      title: "Lightning Fast Deployment",
      description: "Get your campaigns up and running in minutes, not weeks",
    },
    {
      icon: Shield,
      title: "Compliance First",
      description: "Built-in TCPA, DNC, and GDPR compliance to keep you protected",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Scale your outreach globally with multi-language support",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former VP of Sales at leading CRM company",
      avatar: "/placeholder.svg",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "AI/ML expert with 15+ years in voice technology",
      avatar: "/placeholder.svg",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      description: "Product leader focused on customer success",
      avatar: "/placeholder.svg",
    },
  ];

  const stats = [
    { title: "Active Customers", value: "2,500+" },
    { title: "Calls Processed", value: "10M+" },
    { title: "Success Rate", value: "89%" },
    { title: "Countries Served", value: "25+" },
  ];

  return (
    <div className="flex-1 space-y-8 p-6">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <Bot className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">AI Lead Generation Corp</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Revolutionizing sales outreach with intelligent AI voice agents that convert prospects into customers
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">AI Technology</Badge>
          <Badge variant="secondary">Sales Automation</Badge>
          <Badge variant="secondary">Lead Generation</Badge>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            We believe that every business deserves access to cutting-edge AI technology that can transform their sales process. 
            Our mission is to democratize AI-powered lead generation, making it accessible and effective for companies of all sizes.
          </p>
          <p>
            Founded in 2023, we've helped thousands of businesses automate their outreach while maintaining the human touch that 
            converts prospects into loyal customers. Our AI agents are designed to have natural conversations, qualify leads effectively, 
            and respect compliance requirements.
          </p>
        </CardContent>
      </Card>

      {/* Features Section */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Why Choose Our Platform?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Our Technology
          </CardTitle>
          <CardDescription>Built on cutting-edge AI and cloud infrastructure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">AI Voice Engine</h4>
              <p className="text-sm text-muted-foreground">
                Our proprietary AI voice technology uses advanced natural language processing to create 
                conversations that feel authentic and engaging.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Smart Lead Scoring</h4>
              <p className="text-sm text-muted-foreground">
                Machine learning algorithms analyze thousands of data points to identify the highest-quality 
                prospects and optimize conversion rates.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Real-time Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive dashboards provide instant insights into campaign performance, call quality, 
                and lead progression.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground">
                Bank-level encryption, SOC 2 compliance, and strict data privacy controls protect your 
                business and customer information.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Get in Touch
            </CardTitle>
            <CardDescription>Ready to transform your sales process?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">contact@aileadgen.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Button className="w-full">Schedule a Demo</Button>
              <Button variant="outline" className="w-full">Start Free Trial</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium">Founded:</span> 2023
              </div>
              <div>
                <span className="font-medium">Headquarters:</span> San Francisco, California
              </div>
              <div>
                <span className="font-medium">Employees:</span> 50+
              </div>
              <div>
                <span className="font-medium">Funding:</span> Series A
              </div>
              <div>
                <span className="font-medium">Industry:</span> Sales Technology, AI/ML
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                AI Lead Generation Corp is a certified SOC 2 Type II compliant company, 
                ensuring the highest standards of security and data protection.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}