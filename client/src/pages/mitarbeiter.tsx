import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Filter, 
  Download,
  Plus,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  UserCircle,
  Euro,
  Calendar,
  Building2,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";

interface Employee {
  id: number;
  personalNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  salary: number;
  startDate: string;
  status: 'active' | 'inactive' | 'pending';
}

type SortField = 'personalNumber' | 'lastName' | 'salary' | 'startDate' | 'position';
type SortDirection = 'asc' | 'desc';

export default function Mitarbeiter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>('lastName');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [filterDepartment, setFilterDepartment] = useState("all");

  // Mock employee data - realistic German company data
  const employees: Employee[] = [
    {
      id: 1,
      personalNumber: "MA-2024-001",
      firstName: "Anna",
      lastName: "Mueller",
      email: "a.mueller@unternehmen.de",
      position: "Senior Entwicklerin",
      department: "IT",
      salary: 65000,
      startDate: "2022-03-15",
      status: "active"
    },
    {
      id: 2,
      personalNumber: "MA-2024-002", 
      firstName: "Thomas",
      lastName: "Schmidt",
      email: "t.schmidt@unternehmen.de",
      position: "Projektmanager",
      department: "Marketing",
      salary: 58000,
      startDate: "2021-08-22",
      status: "active"
    },
    {
      id: 3,
      personalNumber: "MA-2024-003",
      firstName: "Sarah",
      lastName: "Weber",
      email: "s.weber@unternehmen.de",
      position: "HR Spezialistin",
      department: "Personal",
      salary: 52000,
      startDate: "2023-01-10",
      status: "active"
    },
    {
      id: 4,
      personalNumber: "MA-2024-004",
      firstName: "Michael",
      lastName: "Fischer",
      email: "m.fischer@unternehmen.de",
      position: "Teamleiter Vertrieb",
      department: "Vertrieb",
      salary: 72000,
      startDate: "2020-06-01",
      status: "active"
    },
    {
      id: 5,
      personalNumber: "MA-2024-005",
      firstName: "Lisa",
      lastName: "Wagner",
      email: "l.wagner@unternehmen.de",
      position: "Buchhalterin",
      department: "Finanzen",
      salary: 45000,
      startDate: "2023-09-01",
      status: "pending"
    },
    {
      id: 6,
      personalNumber: "MA-2024-006",
      firstName: "David",
      lastName: "Bauer",
      email: "d.bauer@unternehmen.de",
      position: "UX Designer",
      department: "IT",
      salary: 55000,
      startDate: "2022-11-15",
      status: "active"
    },
    {
      id: 7,
      personalNumber: "MA-2024-007",
      firstName: "Julia",
      lastName: "Hoffmann",
      email: "j.hoffmann@unternehmen.de",
      position: "Marketing Managerin",
      department: "Marketing",
      salary: 61000,
      startDate: "2021-04-12",
      status: "active"
    },
    {
      id: 8,
      personalNumber: "MA-2024-008",
      firstName: "Martin",
      lastName: "Klein",
      email: "m.klein@unternehmen.de",
      position: "Software Architekt",
      department: "IT",
      salary: 78000,
      startDate: "2019-02-20",
      status: "active"
    }
  ];

  // Filter and sort employees
  const filteredAndSortedEmployees = employees
    .filter(emp => {
      const matchesSearch = searchTerm === "" || 
        emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.personalNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.position.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = filterDepartment === "all" || emp.department === filterDepartment;
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }
      
      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 opacity-40" />;
    }
    return sortDirection === 'asc' ? 
      <ArrowUp className="w-4 h-4 text-[var(--lohn-primary)]" /> : 
      <ArrowDown className="w-4 h-4 text-[var(--lohn-primary)]" />;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">Aktiv</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-200">Ausstehend</Badge>;
      case 'inactive':
        return <Badge variant="secondary" className="bg-gray-50 text-gray-700 border-gray-200">Inaktiv</Badge>;
      default:
        return null;
    }
  };

  // Statistics
  const stats = {
    total: employees.length,
    active: employees.filter(emp => emp.status === 'active').length,
    avgSalary: Math.round(employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length),
    departments: Array.from(new Set(employees.map(emp => emp.department))).length
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img src={lohnlabLogo} alt="LohnLab" className="h-8 w-auto" />
                <div className="h-6 w-px bg-slate-200"></div>
                <span className="text-sm font-semibold text-slate-900 tracking-tight">Mitarbeiterverwaltung</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  LR
                </div>
                <span className="text-sm font-medium text-slate-700">L. Reschtat</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Gesamt Mitarbeiter</p>
                  <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Aktive Mitarbeiter</p>
                  <p className="text-2xl font-bold text-slate-900">{stats.active}</p>
                </div>
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <UserCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Ø Gehalt</p>
                  <p className="text-2xl font-bold text-slate-900">€{stats.avgSalary.toLocaleString()}</p>
                </div>
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Euro className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Abteilungen</p>
                  <p className="text-2xl font-bold text-slate-900">{stats.departments}</p>
                </div>
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls and Table */}
        <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
          <CardHeader className="border-b border-slate-100">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Mitarbeiter ({filteredAndSortedEmployees.length})
              </CardTitle>
              
              <div className="flex items-center space-x-3">
                <Button size="sm" variant="outline" className="text-slate-600 border-slate-300">
                  <Download className="w-4 h-4 mr-2" />
                  Exportieren
                </Button>
                <Button size="sm" className="bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Mitarbeiter hinzufügen
                </Button>
              </div>
            </div>
            
            {/* Search and Filter Controls */}
            <div className="flex items-center space-x-4 mt-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Suche nach Name, Position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-slate-300 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20"
                />
              </div>
              
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20"
              >
                <option value="all">Alle Abteilungen</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Personal">Personal</option>
                <option value="Vertrieb">Vertrieb</option>
                <option value="Finanzen">Finanzen</option>
              </select>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-3 px-4">
                      <button 
                        onClick={() => handleSort('personalNumber')}
                        className="flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                      >
                        <span>Personal-Nr.</span>
                        {getSortIcon('personalNumber')}
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <button 
                        onClick={() => handleSort('lastName')}
                        className="flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                      >
                        <span>Name</span>
                        {getSortIcon('lastName')}
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <button 
                        onClick={() => handleSort('position')}
                        className="flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                      >
                        <span>Position</span>
                        {getSortIcon('position')}
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <span className="text-sm font-medium text-slate-600">Abteilung</span>
                    </th>
                    <th className="text-left py-3 px-4">
                      <button 
                        onClick={() => handleSort('salary')}
                        className="flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                      >
                        <span>Gehalt</span>
                        {getSortIcon('salary')}
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <button 
                        onClick={() => handleSort('startDate')}
                        className="flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                      >
                        <span>Eintrittsdatum</span>
                        {getSortIcon('startDate')}
                      </button>
                    </th>
                    <th className="text-left py-3 px-4">
                      <span className="text-sm font-medium text-slate-600">Status</span>
                    </th>
                    <th className="text-left py-3 px-4">
                      <span className="text-sm font-medium text-slate-600">Aktionen</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedEmployees.map((employee) => (
                    <tr key={employee.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="text-sm font-medium text-slate-900">{employee.personalNumber}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {employee.firstName} {employee.lastName}
                          </p>
                          <p className="text-xs text-slate-500">{employee.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-slate-700">{employee.position}</span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="text-xs">
                          {employee.department}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-medium text-slate-900">
                          €{employee.salary.toLocaleString()}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-slate-700">
                          {new Date(employee.startDate).toLocaleDateString('de-DE')}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(employee.status)}
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}