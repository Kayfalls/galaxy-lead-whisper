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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 translate-y-48 -translate-x-48"></div>
      <div className="relative flex-1 space-y-12 p-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center shadow-lg">
              <Bot className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            AI Lead Generation Corp
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionizing sales outreach with intelligent AI voice agents that convert prospects into customers
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">AI Technology</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Sales Automation</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Lead Generation</Badge>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="text-center bg-card/80 backdrop-blur-md border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-card/90">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <Card className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-xl">
          <CardHeader className="pb-6 bg-gradient-to-r from-primary/5 to-transparent rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed">
              We believe that every business deserves access to cutting-edge AI technology that can transform their sales process. 
              Our mission is to democratize AI-powered lead generation, making it accessible and effective for companies of all sizes.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Founded in 2023, we've helped thousands of businesses automate their outreach while maintaining the human touch that 
              converts prospects into loyal customers. Our AI agents are designed to have natural conversations, qualify leads effectively, 
              and respect compliance requirements.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Why Choose Our Platform?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center pb-4 bg-gradient-to-b from-primary/5 to-transparent rounded-t-lg">
                  <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 w-fit group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4 bg-gradient-to-b from-primary/5 to-transparent rounded-t-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <Card className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-xl">
          <CardHeader className="pb-6 bg-gradient-to-r from-primary/5 to-transparent rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              Our Technology
            </CardTitle>
            <CardDescription className="text-base">Built on cutting-edge AI and cloud infrastructure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300">
                <h4 className="font-semibold mb-3 text-lg text-primary">AI Voice Engine</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our proprietary AI voice technology uses advanced natural language processing to create 
                  conversations that feel authentic and engaging.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300">
                <h4 className="font-semibold mb-3 text-lg text-primary">Smart Lead Scoring</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Machine learning algorithms analyze thousands of data points to identify the highest-quality 
                  prospects and optimize conversion rates.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300">
                <h4 className="font-semibold mb-3 text-lg text-primary">Real-time Analytics</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive dashboards provide instant insights into campaign performance, call quality, 
                  and lead progression.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300">
                <h4 className="font-semibold mb-3 text-lg text-primary">Enterprise Security</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bank-level encryption, SOC 2 compliance, and strict data privacy controls protect your 
                  business and customer information.
                </p>
              </div>
            </div>
          </CardContent>
      </Card>

        {/* Contact Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-xl">
            <CardHeader className="pb-6 bg-gradient-to-r from-primary/5 to-transparent rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                Get in Touch
              </CardTitle>
              <CardDescription className="text-base">Ready to transform your sales process?</CardDescription>
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

          <Card className="bg-card/80 backdrop-blur-md border border-primary/20 shadow-xl">
            <CardHeader className="pb-6 bg-gradient-to-r from-primary/5 to-transparent rounded-t-lg">
              <CardTitle className="text-xl">Company Information</CardTitle>
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
    </div>
  );
}