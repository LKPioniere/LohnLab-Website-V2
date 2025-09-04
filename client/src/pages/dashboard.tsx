import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Briefcase
} from "lucide-react";
import { Link } from "wouter";

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
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Mock data für das Dashboard
  const kpiData = {
    erfassteMitarbeiter: 35,
    durchschnittsgehalt: 4114,
    gesamtMitarbeiter: 42,
    kosteneinsparung: 18500,
    optimierungsrate: 87,
    pendenteLohnerhöhungen: 7
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-[var(--lohn-primary)]">LohnLab Cockpit</h1>
            <Badge variant="secondary" className="bg-[var(--lohn-teal)]/10 text-[var(--lohn-teal)]">
              Professional
            </Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Button>

            {/* Kunde Dropdown */}
            <div className="relative">
              <Button variant="outline" className="min-w-[120px]">
                <Building2 className="w-4 h-4 mr-2" />
                {selectedKunde}
                <ChevronDown className="w-4 h-4 ml-auto" />
              </Button>
            </div>

            {/* Unternehmen Dropdown */}
            <div className="relative">
              <Button variant="outline" className="min-w-[140px]">
                <Briefcase className="w-4 h-4 mr-2" />
                {selectedUnternehmen}
                <ChevronDown className="w-4 h-4 ml-auto" />
              </Button>
            </div>

            {/* User Profile */}
            <div className="relative">
              <Button 
                variant="ghost" 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2"
              >
                <UserCircle className="w-6 h-6" />
                <span className="font-medium">Lennart Reschtat</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white min-h-screen shadow-sm">
          <div className="p-6">
            <nav className="space-y-2">
              <SidebarItem 
                icon={<LayoutDashboard className="w-5 h-5" />}
                label="Dashboard"
                isActive={true}
              />
              <SidebarItem 
                icon={<Users className="w-5 h-5" />}
                label="Mitarbeiter"
                href="/mitarbeiter"
              />
              <SidebarItem 
                icon={<Building2 className="w-5 h-5" />}
                label="Unternehmen"
                href="/unternehmen"
              />
              <SidebarItem 
                icon={<Calculator className="w-5 h-5" />}
                label="Gehaltsrechner"
                hasDropdown
                isExpanded={gehaltsrechnerExpanded}
                onClick={() => setGehaltsrechnerExpanded(!gehaltsrechnerExpanded)}
              />
              {gehaltsrechnerExpanded && (
                <div className="ml-8 space-y-1">
                  <Link href="/lohnerhoehung" className="block px-3 py-2 text-sm text-gray-600 hover:text-[var(--lohn-primary)] transition-colors">
                    Lohnerhöhung
                  </Link>
                  <Link href="/neueinstellung" className="block px-3 py-2 text-sm text-gray-600 hover:text-[var(--lohn-primary)] transition-colors">
                    Neueinstellung
                  </Link>
                </div>
              )}
            </nav>

            {/* Admin Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Admin</h3>
              <nav className="space-y-1">
                <SidebarItem 
                  icon={<Users className="w-4 h-4" />}
                  label="Kunden"
                  href="/admin/kunden"
                />
                <SidebarItem 
                  icon={<Settings className="w-4 h-4" />}
                  label="Benutzerverwaltung"
                  href="/admin/users"
                />
                <SidebarItem 
                  icon={<Target className="w-4 h-4" />}
                  label="System Links"
                  href="/admin/links"
                />
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Guten {new Date().getHours() < 12 ? 'Morgen' : new Date().getHours() < 18 ? 'Tag' : 'Abend'}
                </h2>
                <p className="text-gray-600">Übersicht für {selectedUnternehmen}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Bericht erstellen
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium opacity-90">Erfasste Mitarbeiter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{kpiData.erfassteMitarbeiter}</span>
                  <Users className="w-6 h-6 opacity-80" />
                </div>
                <p className="text-xs opacity-75 mt-1">von {kpiData.gesamtMitarbeiter} gesamt</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-secondary)] text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium opacity-90">Ø Bruttolohn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{kpiData.durchschnittsgehalt.toLocaleString()} €</span>
                  <Euro className="w-6 h-6 opacity-80" />
                </div>
                <p className="text-xs opacity-75 mt-1">pro Mitarbeiter</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[var(--lohn-purple)] to-[var(--lohn-primary)] text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium opacity-90">Kosteneinsparung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{kpiData.kosteneinsparung.toLocaleString()} €</span>
                  <TrendingUp className="w-6 h-6 opacity-80" />
                </div>
                <p className="text-xs opacity-75 mt-1">jährlich</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium opacity-90">Optimierungsrate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{kpiData.optimierungsrate}%</span>
                  <Target className="w-6 h-6 opacity-80" />
                </div>
                <p className="text-xs opacity-75 mt-1">erfolgreich optimiert</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[var(--lohn-primary)]" />
                  Schnellzugriff
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/mitarbeiter">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-3" />
                    Mitarbeiter verwalten
                  </Button>
                </Link>
                <Link href="/lohnerhoehung">
                  <Button className="w-full justify-start bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white">
                    <Calculator className="w-4 h-4 mr-3" />
                    Gehaltsrechner
                  </Button>
                </Link>
                <Link href="/berichte">
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-3" />
                    Berichte erstellen
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[var(--lohn-primary)]" />
                    Aktuelle Aktivitäten
                  </span>
                  <Button variant="ghost" size="sm">Alle anzeigen</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-1 rounded">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Lohnoptimierung abgeschlossen</p>
                      <p className="text-xs text-gray-500">Müller, Sarah - Einsparung: 240€/Monat</p>
                      <p className="text-xs text-gray-400">vor 15 Minuten</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="bg-green-100 p-1 rounded">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Neuer Mitarbeiter hinzugefügt</p>
                      <p className="text-xs text-gray-500">Schmidt, Thomas - Position: Entwickler</p>
                      <p className="text-xs text-gray-400">vor 2 Stunden</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-100 p-1 rounded">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Überprüfung erforderlich</p>
                      <p className="text-xs text-gray-500">{kpiData.pendenteLohnerhöhungen} Lohnerhöhungen benötigen Freigabe</p>
                      <p className="text-xs text-gray-400">vor 3 Stunden</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Salary Distribution Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-[var(--lohn-primary)]" />
                  Gehaltsverteilung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">Diagramm wird geladen...</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-[var(--lohn-primary)]" />
                  Monatliche Entwicklung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">Diagramm wird geladen...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')} um {new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Erweiterte Suche
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}