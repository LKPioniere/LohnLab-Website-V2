import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Calculator, 
  ChevronDown, 
  ChevronRight,
  UserCircle,
  TrendingUp,
  AlertCircle,
  Clock,
  Euro,
  PieChart,
  BarChart3,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Calendar,
  Target,
  Award,
  Briefcase,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  FileText,
  Plus,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Zap,
  DollarSign,
  Percent
} from "lucide-react";
import { Link } from "wouter";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
  href?: string;
}

function SidebarItem({ icon, label, isActive, hasDropdown, isExpanded, onClick, href }: SidebarItemProps) {
  if (href) {
    return (
      <Link href={href} className={`flex items-center px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
        isActive 
          ? 'bg-[var(--lohn-primary)] text-white' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}>
        {icon}
        <span className="ml-3 font-medium">{label}</span>
        {hasDropdown && (
          isExpanded ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />
        )}
      </Link>
    );
  }

  return (
    <div 
      className={`flex items-center px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
        isActive 
          ? 'bg-[var(--lohn-primary)] text-white' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3 font-medium">{label}</span>
      {hasDropdown && (
        isExpanded ? <ChevronDown className="ml-auto w-4 h-4" /> : <ChevronRight className="ml-auto w-4 h-4" />
      )}
    </div>
  );
}

export default function Dashboard() {
  const [selectedKunde, setSelectedKunde] = useState("Testkundy");
  const [selectedUnternehmen, setSelectedUnternehmen] = useState("Testunternehmy");
  const [gehaltsrechnerExpanded, setGehaltsrechnerExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Enterprise-grade data for professional dashboard
  const dashboardData = {
    kpis: {
      employeesProcessed: { current: 247, total: 298, change: 12 },
      avgSavings: { amount: 1847, percentage: 23.4, trend: 'up' },
      automationRate: { percentage: 94.2, change: 4.1 },
      monthlyVolume: { amount: 456789, change: 8.7 }
    },
    activities: [
      {
        id: 1,
        type: 'optimization_complete',
        title: 'Salary optimization completed',
        description: 'Emma Weber - Monthly savings: €387',
        time: '5 min ago',
        status: 'success'
      },
      {
        id: 2,
        type: 'bulk_import',
        title: 'Bulk employee import',
        description: '47 employees processed successfully',
        time: '23 min ago',
        status: 'success'
      },
      {
        id: 3,
        type: 'approval_pending',
        title: 'Approvals required',
        description: '12 salary adjustments awaiting review',
        time: '1 hour ago',
        status: 'warning'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Executive Navigation Header */}
      <header className="bg-white border-b border-slate-200/60 sticky top-0 z-40">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand & Context */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img src={lohnlabLogo} alt="LohnLab" className="h-8 w-auto" />
                <div className="h-6 w-px bg-slate-200"></div>
                <span className="text-sm font-semibold text-slate-900 tracking-tight">Cockpit</span>
              </div>
              
              {/* Context Indicators */}
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium">
                  Enterprise
                </Badge>
                <Badge variant="outline" className="text-slate-600 border-slate-300 font-normal">
                  Live System
                </Badge>
              </div>
            </div>

            {/* Control Center */}
            <div className="flex items-center space-x-4">
              {/* Global Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search across system..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 bg-slate-50 border-slate-200 focus:bg-white focus:border-[var(--lohn-primary)] transition-all duration-200"
                />
              </div>

              {/* System Status & Notifications */}
              <Button variant="ghost" size="sm" className="relative text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-medium">4</span>
              </Button>

              {/* Context Selectors */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="h-9 text-slate-700 border-slate-300 hover:border-slate-400">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="max-w-24 truncate">{selectedKunde}</span>
                  <ChevronDown className="w-3 h-3 ml-2" />
                </Button>
                
                <Button variant="outline" size="sm" className="h-9 text-slate-700 border-slate-300 hover:border-slate-400">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="max-w-28 truncate">{selectedUnternehmen}</span>
                  <ChevronDown className="w-3 h-3 ml-2" />
                </Button>
              </div>

              {/* User Menu */}
              <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  LR
                </div>
                <Button variant="ghost" size="sm" className="text-slate-700 hover:text-slate-900">
                  <span className="text-sm font-medium">L. Reschtat</span>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen bg-slate-50">
        {/* Enterprise Sidebar */}
        <aside className="w-72 bg-white border-r border-slate-200/60">
          <div className="p-6">
            {/* Primary Navigation */}
            <nav className="space-y-1">
              <SidebarItem 
                icon={<LayoutDashboard className="w-5 h-5" />}
                label="Dashboard"
                isActive={true}
              />
              <SidebarItem 
                icon={<Users className="w-5 h-5" />}
                label="Employee Management"
                href="/mitarbeiter"
              />
              <SidebarItem 
                icon={<Building2 className="w-5 h-5" />}
                label="Company Structure"
                href="/unternehmen"
              />
              <SidebarItem 
                icon={<Calculator className="w-5 h-5" />}
                label="Salary Calculator"
                hasDropdown
                isExpanded={gehaltsrechnerExpanded}
                onClick={() => setGehaltsrechnerExpanded(!gehaltsrechnerExpanded)}
              />
              {gehaltsrechnerExpanded && (
                <div className="ml-6 mt-2 space-y-1 border-l-2 border-slate-100 pl-4">
                  <Link href="/lohnerhoehung" className="block py-2 px-3 text-sm text-slate-600 hover:text-[var(--lohn-primary)] hover:bg-slate-50 rounded-md transition-all duration-150">
                    Salary Increases
                  </Link>
                  <Link href="/neueinstellung" className="block py-2 px-3 text-sm text-slate-600 hover:text-[var(--lohn-primary)] hover:bg-slate-50 rounded-md transition-all duration-150">
                    New Hires
                  </Link>
                </div>
              )}
            </nav>

            {/* Analytics & Reports */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Analytics & Reports</h3>
              <nav className="space-y-1">
                <SidebarItem 
                  icon={<BarChart3 className="w-4 h-4" />}
                  label="Performance Analytics"
                  href="/analytics"
                />
                <SidebarItem 
                  icon={<FileText className="w-4 h-4" />}
                  label="Custom Reports"
                  href="/reports"
                />
              </nav>
            </div>

            {/* Administration */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Administration</h3>
              <nav className="space-y-1">
                <SidebarItem 
                  icon={<Users className="w-4 h-4" />}
                  label="Client Management"
                  href="/admin/kunden"
                />
                <SidebarItem 
                  icon={<Settings className="w-4 h-4" />}
                  label="User Administration"
                  href="/admin/users"
                />
                <SidebarItem 
                  icon={<Activity className="w-4 h-4" />}
                  label="System Health"
                  href="/admin/system"
                />
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Executive Dashboard */}
        <main className="flex-1 overflow-hidden">
          <div className="p-8 max-w-7xl mx-auto space-y-8">
            {/* Executive Summary Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Executive Dashboard
                </h1>
                <p className="text-slate-600 text-sm">
                  Real-time insights for {selectedUnternehmen} • Updated {new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button size="sm" variant="outline" className="border-slate-300 text-slate-700 hover:border-slate-400">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button size="sm" className="bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Analysis
                </Button>
              </div>
            </div>

            {/* Executive KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-600">Employees Processed</p>
                      <div className="flex items-baseline space-x-2">
                        <p className="text-2xl font-bold text-slate-900">{dashboardData.kpis.employeesProcessed.current}</p>
                        <p className="text-sm text-slate-500">of {dashboardData.kpis.employeesProcessed.total}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-emerald-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-sm font-medium">+{dashboardData.kpis.employeesProcessed.change}%</span>
                    </div>
                    <span className="text-sm text-slate-500">vs last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-600">Avg. Monthly Savings</p>
                      <div className="flex items-baseline space-x-2">
                        <p className="text-2xl font-bold text-slate-900">€{dashboardData.kpis.avgSavings.amount.toLocaleString()}</p>
                        <p className="text-sm text-slate-500">{dashboardData.kpis.avgSavings.percentage}%</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-emerald-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Trending up</span>
                    </div>
                    <span className="text-sm text-slate-500">optimal performance</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-600">Automation Rate</p>
                      <div className="flex items-baseline space-x-2">
                        <p className="text-2xl font-bold text-slate-900">{dashboardData.kpis.automationRate.percentage}%</p>
                        <p className="text-sm text-slate-500">efficiency</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-violet-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-emerald-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-sm font-medium">+{dashboardData.kpis.automationRate.change}%</span>
                    </div>
                    <span className="text-sm text-slate-500">automation improved</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-600">Monthly Volume</p>
                      <div className="flex items-baseline space-x-2">
                        <p className="text-2xl font-bold text-slate-900">€{(dashboardData.kpis.monthlyVolume.amount / 1000).toFixed(0)}K</p>
                        <p className="text-sm text-slate-500">processed</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-emerald-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-sm font-medium">+{dashboardData.kpis.monthlyVolume.change}%</span>
                    </div>
                    <span className="text-sm text-slate-500">volume growth</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Primary Action Center & System Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quick Actions Hub */}
              <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
                    <Zap className="w-5 h-5 mr-3 text-[var(--lohn-primary)]" />
                    Action Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/mitarbeiter">
                    <Button className="w-full justify-start h-12 text-left bg-gradient-to-r from-slate-50 to-slate-100 hover:from-[var(--lohn-primary)]/5 hover:to-[var(--lohn-primary)]/10 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-[var(--lohn-primary)]/20 transition-all duration-200" variant="ghost">
                      <Users className="w-5 h-5 mr-4" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">Employee Management</div>
                        <div className="text-xs text-slate-500">Manage workforce data</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  
                  <Link href="/lohnerhoehung">
                    <Button className="w-full justify-start h-12 text-left bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white hover:from-[var(--lohn-secondary)] hover:to-[var(--lohn-primary)] transition-all duration-200">
                      <Calculator className="w-5 h-5 mr-4" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">Salary Calculator</div>
                        <div className="text-xs opacity-90">Run optimization analysis</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  
                  <Link href="/reports">
                    <Button className="w-full justify-start h-12 text-left bg-gradient-to-r from-slate-50 to-slate-100 hover:from-emerald-50 hover:to-emerald-100 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-all duration-200" variant="ghost">
                      <BarChart3 className="w-5 h-5 mr-4" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">Generate Reports</div>
                        <div className="text-xs text-slate-500">Export & analyze data</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* System Activity Feed */}
              <Card className="lg:col-span-2 border-0 shadow-sm ring-1 ring-slate-200 bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
                    <Activity className="w-5 h-5 mr-3 text-[var(--lohn-primary)]" />
                    System Activity
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                    View all
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dashboardData.activities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-150">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.status === 'success' ? 'bg-emerald-100' : 
                        activity.status === 'warning' ? 'bg-amber-100' : 'bg-slate-100'
                      }`}>
                        {activity.status === 'success' ? 
                          <CheckCircle className="w-5 h-5 text-emerald-600" /> :
                          activity.status === 'warning' ? 
                          <AlertTriangle className="w-5 h-5 text-amber-600" /> :
                          <Activity className="w-5 h-5 text-slate-600" />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900">{activity.title}</p>
                        <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                        <p className="text-xs text-slate-500 mt-2">{activity.time}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Performance Analytics Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
                    <PieChart className="w-5 h-5 mr-3 text-[var(--lohn-primary)]" />
                    Salary Distribution Analysis
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto">
                        <PieChart className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">Interactive chart loading...</p>
                      <Button size="sm" variant="outline" className="text-xs">
                        Load Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3 text-[var(--lohn-primary)]" />
                    Performance Trends
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto">
                        <BarChart3 className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">Monthly trends analysis</p>
                      <Button size="sm" variant="outline" className="text-xs">
                        Generate Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}