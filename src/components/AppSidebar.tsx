import {
  BarChart3,
  Bot,
  Database,
  Home,
  MessageSquare,
  Mic,
  Phone,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Users,
  Calendar
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Lead Generation", url: "/campaigns", icon: Target },
  { title: "Lead Database", url: "/leads", icon: Database },
  { title: "Social Media Finder", url: "/voice", icon: Bot },
  { title: "Web Scraping", url: "/calls", icon: Phone },
  { title: "Data Mining", url: "/recording", icon: Mic },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Lead Scoring", url: "/scoring", icon: TrendingUp },
  { title: "AI Insights", url: "/conversations", icon: MessageSquare },
  { title: "Team", url: "/team", icon: Users },
  { title: "Compliance", url: "/compliance", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "CRM Integration", url: "/crm", icon: Users },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "About Us", url: "/about", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-lg" 
      : "hover:bg-white/10 hover:backdrop-blur-md hover:text-foreground text-foreground/90 transition-all duration-300 hover:shadow-md hover:border-white/20";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"}>
      <SidebarContent>
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-semibold text-sm text-foreground">AI Lead Gen</h2>
                <p className="text-xs text-foreground/70">Autonomous Platform</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}