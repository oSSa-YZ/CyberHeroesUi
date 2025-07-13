import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, ArrowLeft, BarChart, Users, FileText, Award, Download, Printer } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function ProgressDashboardPage() {
  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/games", label: "Games", icon: "🎯" },
    { href: "/bad-guys", label: "Bad Guys", icon: "😈" },
    { href: "/powers", label: "Powers", icon: "⚡" },
    { href: "/quiz", label: "Quiz", icon: "🎮" },
    { href: "/progress-dashboard", label: "For Teachers", icon: "👨‍👩‍👧‍👦" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <header className="sticky top-0 z-50 w-full border-b bg-blue-600 shadow-md">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="bg-white rounded-full p-2">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <span className="font-extrabold">CyberHeroes</span>
            <span className="text-xs bg-blue-500 px-2 py-1 rounded-md">Teacher Portal</span>
          </Link>

          {/* Mobile Menu */}
          <MobileMenu items={navItems} />

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
            <Link className="text-sm font-bold text-white hover:underline underline-offset-4" href="/">
              Home
            </Link>
            <Link
              className="text-sm font-bold text-white hover:underline underline-offset-4"
              href="/progress-dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-sm font-bold text-white hover:underline underline-offset-4"
              href="/progress-dashboard/students"
            >
              Students
            </Link>
            <Link
              className="text-sm font-bold text-white hover:underline underline-offset-4"
              href="/progress-dashboard/resources"
            >
              Resources
            </Link>
            <Link
              className="text-sm font-bold text-white hover:underline underline-offset-4"
              href="/progress-dashboard/reports"
            >
              Reports
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex items-center gap-2 mb-8">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="bg-white hover:bg-blue-100 text-blue-600 rounded-full"
            >
              <Link href="/">
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tighter text-blue-700">
              Progress Dashboard
            </h1>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-4 mb-8">
            <Card className="bg-white border-2 border-blue-200">
              <CardHeader className="bg-blue-500 text-white p-3 sm:p-4">
                <CardTitle className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" /> Students
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="text-xl sm:text-3xl font-bold text-blue-700">24</div>
                <p className="text-sm sm:text-base text-blue-600">Active students</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-200">
              <CardHeader className="bg-green-500 text-white p-3 sm:p-4">
                <CardTitle className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" /> Completed
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="text-xl sm:text-3xl font-bold text-green-700">18</div>
                <p className="text-sm sm:text-base text-green-600">Completed all modules</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-200">
              <CardHeader className="bg-yellow-500 text-white p-3 sm:p-4">
                <CardTitle className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <BarChart className="h-4 w-4 sm:h-5 sm:w-5" /> In Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="text-xl sm:text-3xl font-bold text-yellow-700">6</div>
                <p className="text-sm sm:text-base text-yellow-600">Students in progress</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-200">
              <CardHeader className="bg-purple-500 text-white p-3 sm:p-4">
                <CardTitle className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" /> Average Score
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="text-xl sm:text-3xl font-bold text-purple-700">82%</div>
                <p className="text-sm sm:text-base text-purple-600">Class average</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-blue-100 p-2 gap-2 mb-6">
              <TabsTrigger
                value="overview"
                className="bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg font-bold text-blue-700 border-2 border-blue-200 data-[state=active]:border-blue-700 text-xs sm:text-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="students"
                className="bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg font-bold text-blue-700 border-2 border-blue-200 data-[state=active]:border-blue-700 text-xs sm:text-sm"
              >
                Students
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg font-bold text-blue-700 border-2 border-blue-200 data-[state=active]:border-blue-700 text-xs sm:text-sm"
              >
                Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="bg-white border-2 border-blue-200">
                <CardHeader className="bg-blue-50 border-b border-blue-100">
                  <CardTitle className="text-lg sm:text-xl font-bold text-blue-700">Class Progress Overview</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base font-bold text-blue-700">Phishing Awareness</span>
                        <span className="text-sm sm:text-base font-bold text-green-600">85% Complete</span>
                      </div>
                      <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base font-bold text-blue-700">Password Security</span>
                        <span className="text-sm sm:text-base font-bold text-green-600">92% Complete</span>
                      </div>
                      <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base font-bold text-blue-700">Online Privacy</span>
                        <span className="text-sm sm:text-base font-bold text-yellow-600">68% Complete</span>
                      </div>
                      <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base font-bold text-blue-700">Cyberbullying</span>
                        <span className="text-sm sm:text-base font-bold text-yellow-600">75% Complete</span>
                      </div>
                      <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base font-bold text-blue-700">Digital Footprint</span>
                        <span className="text-sm sm:text-base font-bold text-red-600">45% Complete</span>
                      </div>
                      <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-white border-2 border-blue-200">
                  <CardHeader className="bg-blue-50 border-b border-blue-100">
                    <CardTitle className="text-lg sm:text-xl font-bold text-blue-700">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-bold text-blue-700">
                            Emma completed Password Security
                          </p>
                          <p className="text-xs sm:text-sm text-blue-600">Today, 10:45 AM</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="bg-yellow-100 p-2 rounded-full">
                          <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-bold text-blue-700">Noah started Digital Footprint</p>
                          <p className="text-xs sm:text-sm text-blue-600">Today, 9:30 AM</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-bold text-blue-700">
                            Sophia scored 95% on Phishing Quiz
                          </p>
                          <p className="text-xs sm:text-sm text-blue-600">Yesterday, 3:15 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-blue-200">
                  <CardHeader className="bg-blue-50 border-b border-blue-100">
                    <CardTitle className="text-lg sm:text-xl font-bold text-blue-700">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 justify-center text-sm sm:text-base">
                        <Download className="h-4 w-4 sm:h-5 sm:w-5" /> Download Class Report
                      </Button>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 justify-center text-sm sm:text-base">
                        <Printer className="h-4 w-4 sm:h-5 sm:w-5" /> Print Certificates
                      </Button>

                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 justify-center text-sm sm:text-base">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5" /> Manage Student Groups
                      </Button>

                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white flex items-center gap-2 justify-center text-sm sm:text-base">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5" /> Access Lesson Plans
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <Card className="bg-white border-2 border-blue-200">
                <CardHeader className="bg-blue-50 border-b border-blue-100">
                  <CardTitle className="text-lg sm:text-xl font-bold text-blue-700">Student Progress</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {/* Student progress entries would go here */}
                    <p className="text-sm sm:text-base text-blue-600">
                      Select a student to view detailed progress information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card className="bg-white border-2 border-blue-200">
                <CardHeader className="bg-blue-50 border-b border-blue-100">
                  <CardTitle className="text-lg sm:text-xl font-bold text-blue-700">Available Reports</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {/* Report options would go here */}
                    <p className="text-sm sm:text-base text-blue-600">
                      Generate and download various reports for your class.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="w-full border-t py-4 bg-blue-600 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-base text-white font-medium">© {new Date().getFullYear()} CyberHeroes Teacher Portal</p>
          <div className="flex gap-4">
            <Link className="text-xs sm:text-sm font-medium hover:underline text-white" href="#">
              Help Center
            </Link>
            <Link className="text-xs sm:text-sm font-medium hover:underline text-white" href="#">
              Privacy Policy
            </Link>
            <Link className="text-xs sm:text-sm font-medium hover:underline text-white" href="#">
              Contact Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
