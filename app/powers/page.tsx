import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react"
import { Sticker } from "@/components/sticker"
import { VideoPlayer } from "@/components/video-player"
import { MobileMenu } from "@/components/mobile-menu"

export default function PowersPage() {
  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/games", label: "Games", icon: "🎯" },
    { href: "/bad-guys", label: "Bad Guys", icon: "😈" },
    { href: "/powers", label: "Powers", icon: "⚡" },
    { href: "/quiz", label: "Quiz", icon: "🎮" },
    { href: "/progress-dashboard", label: "For Teachers", icon: "👨‍👩‍👧‍👦" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-purple-50">
      <header className="sticky top-0 z-50 w-full border-b bg-yellow-400 shadow-md">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-purple-800">
            <div className="bg-purple-600 rounded-full p-2">
              <Shield className="h-6 w-6 text-yellow-300" />
            </div>
            <span className="font-extrabold">CyberHeroes</span>
          </Link>

          {/* Mobile Menu */}
          <MobileMenu items={navItems} />

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                className="text-sm font-bold text-purple-800 hover:scale-110 transition-transform flex flex-col items-center"
                href={item.href}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 bg-gradient-to-b from-purple-400 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="bg-yellow-300 hover:bg-yellow-400 text-purple-800 rounded-full"
              >
                <Link href="/">
                  <ArrowLeft className="h-6 w-6" />
                  <span className="sr-only">Back</span>
                </Link>
              </Button>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-white drop-shadow-md flex items-center gap-2">
                <Sticker emoji="⚡" size="lg" /> Your Cyber Super Powers!
              </h1>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl sm:text-3xl">👉</span>
              <p className="text-base sm:text-xl text-white font-medium">Learn these powers to defeat the bad guys!</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {/* Password Power Card */}
              <div className="bg-white rounded-xl border-8 border-red-500 shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <div className="bg-red-500 p-4 flex justify-center">
                  <div className="bg-white rounded-full p-4 border-4 border-red-300">
                    <Lock className="h-12 w-12 sm:h-16 sm:w-16 text-red-500" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-center mb-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-800">Password Power</h2>
                    <div className="inline-block bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full border-2 border-yellow-500">
                      Level 1 Power
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-red-50 p-3 rounded-lg border-2 border-red-200">
                      <span className="text-xl sm:text-2xl">✏️</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Create super strong passwords
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-50 p-3 rounded-lg border-2 border-red-200">
                      <span className="text-xl sm:text-2xl">🔄</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Use different passwords everywhere
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-50 p-3 rounded-lg border-2 border-red-200">
                      <span className="text-xl sm:text-2xl">🤐</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Never share your passwords
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-100 p-3 flex justify-center">
                  <Button className="bg-red-500 hover:bg-red-600 text-white font-bold border-2 border-red-600">
                    Master This Power!
                  </Button>
                </div>
              </div>

              {/* Device Shield Card */}
              <div className="bg-white rounded-xl border-8 border-blue-500 shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <div className="bg-blue-500 p-4 flex justify-center">
                  <div className="bg-white rounded-full p-4 border-4 border-blue-300">
                    <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-blue-500" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-center mb-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-800">Device Shield</h2>
                    <div className="inline-block bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full border-2 border-yellow-500">
                      Level 1 Power
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                      <span className="text-xl sm:text-2xl">🔄</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Keep apps and games updated
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                      <span className="text-xl sm:text-2xl">🛡️</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">Use anti-virus shields</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                      <span className="text-xl sm:text-2xl">🔒</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Lock your devices with codes
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 flex justify-center">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold border-2 border-blue-600">
                    Master This Power!
                  </Button>
                </div>
              </div>

              {/* Scam Spotter Card */}
              <div className="bg-white rounded-xl border-8 border-green-500 shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <div className="bg-green-500 p-4 flex justify-center">
                  <div className="bg-white rounded-full p-4 border-4 border-green-300">
                    <Eye className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-center mb-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-800">Scam Spotter</h2>
                    <div className="inline-block bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full border-2 border-yellow-500">
                      Level 2 Power
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg border-2 border-green-200">
                      <span className="text-xl sm:text-2xl">🕵️</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Spot fake emails and websites
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg border-2 border-green-200">
                      <span className="text-xl sm:text-2xl">🔍</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Check for the lock symbol
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg border-2 border-green-200">
                      <span className="text-xl sm:text-2xl">🎁</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Be careful of too-good offers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 p-3 flex justify-center">
                  <Button className="bg-green-500 hover:bg-green-600 text-white font-bold border-2 border-green-600">
                    Master This Power!
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white p-4 rounded-xl border-4 border-yellow-400 flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-1/3 w-full">
                  <VideoPlayer
                    title="How to Use Your Cyber Powers"
                    thumbnailSrc="/placeholder.svg?height=200&width=300"
                  />
                </div>
                <div className="md:w-2/3 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">Watch: How to Use Your Powers!</h3>
                  <p className="text-sm sm:text-base text-purple-800 mb-4">
                    Learn how to use your cyber powers with this fun video!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Sticker emoji="🔑" />
                    </div>
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Sticker emoji="🛡️" />
                    </div>
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Sticker emoji="👁️" />
                    </div>
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Sticker emoji="🔍" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-4 bg-purple-800 text-white border-t-8 border-yellow-400">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-base text-white font-medium">© {new Date().getFullYear()} CyberHeroes</p>
          <div className="flex gap-4">
            <Link className="text-sm font-medium hover:underline text-yellow-300" href="#">
              For Parents
            </Link>
            <Link className="text-sm font-medium hover:underline text-yellow-300" href="#">
              For Teachers
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
