import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield } from "lucide-react"
import { InteractiveTip } from "@/components/interactive-tip"
import { Sticker } from "@/components/sticker"
import { MobileMenu } from "@/components/mobile-menu"

export default function BadGuysPage() {
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
        <section className="w-full py-8 md:py-12 bg-gradient-to-b from-red-400 to-pink-500">
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
                <Sticker emoji="😈" size="lg" /> The Internet Bad Guys!
              </h1>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl sm:text-3xl">👉</span>
              <p className="text-base sm:text-xl text-white font-medium">Watch out for these tricky villains!</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {/* Phishy Phil Card */}
              <div className="bg-white rounded-xl border-8 border-red-500 shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <div className="bg-red-500 p-4 flex justify-center">
                  <div className="bg-white rounded-full p-4 border-4 border-red-300">
                    <span className="text-5xl sm:text-6xl">🎣</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-center mb-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-800">Phishy Phil</h2>
                    <div className="inline-block bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full border-2 border-yellow-500 animate-pulse">
                      Danger Level: High
                    </div>
                  </div>
                  <div className="bg-red-100 p-3 rounded-lg border-2 border-red-200 mb-3">
                    <p className="text-sm sm:text-base text-purple-800 font-medium">
                      Sends fake emails and makes fake websites to steal your passwords!
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border-2 border-red-200">
                      <span className="text-xl sm:text-2xl">📧</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Sends fake emails from games
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border-2 border-red-200">
                      <span className="text-xl sm:text-2xl">🌐</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">Makes fake websites</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-100 p-3 flex justify-center">
                  <Button className="bg-red-500 hover:bg-red-600 text-white font-bold border-2 border-red-600">
                    How To Beat Him!
                  </Button>
                </div>
              </div>

              {/* Ransom Randy Card */}
              <div className="bg-white rounded-xl border-8 border-green-500 shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <div className="bg-green-500 p-4 flex justify-center">
                  <div className="bg-white rounded-full p-4 border-4 border-green-300">
                    <span className="text-5xl sm:text-6xl">🔒</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-center mb-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-800">Ransom Randy</h2>
                    <div className="inline-block bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full border-2 border-yellow-500 animate-pulse">
                      Danger Level: Very High
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg border-2 border-green-200 mb-3">
                    <p className="text-sm sm:text-base text-purple-800 font-medium">
                      Locks up your files and games and demands payment to give them back!
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border-2 border-green-200">
                      <span className="text-xl sm:text-2xl">💾</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">Sneaks into your device</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border-2 border-green-200">
                      <span className="text-xl sm:text-2xl">💰</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">Asks for money</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 p-3 flex justify-center">
                  <Button className="bg-green-500 hover:bg-green-600 text-white font-bold border-2 border-green-600">
                    How To Beat Him!
                  </Button>
                </div>
              </div>

              {/* Sneaky Sam Card */}
              <div className="bg-white rounded-xl border-8 border-blue-500 shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                <div className="bg-blue-500 p-4 flex justify-center">
                  <div className="bg-white rounded-full p-4 border-4 border-blue-300">
                    <span className="text-5xl sm:text-6xl">📡</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-center mb-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-800">Sneaky Sam</h2>
                    <div className="inline-block bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full border-2 border-yellow-500 animate-pulse">
                      Danger Level: Medium
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg border-2 border-blue-200 mb-3">
                    <p className="text-sm sm:text-base text-purple-800 font-medium">
                      Hides in public WiFi and spies on what people do online!
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border-2 border-blue-200">
                      <span className="text-xl sm:text-2xl">🔍</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Creates fake WiFi networks
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border-2 border-blue-200">
                      <span className="text-xl sm:text-2xl">👀</span>
                      <span className="text-sm sm:text-base font-medium text-purple-800">
                        Watches what you do online
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 flex justify-center">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold border-2 border-blue-600">
                    How To Beat Him!
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <InteractiveTip
                title="Did You Know?"
                content="Bad guys can't steal your information if you don't share it with them! Always keep your personal info secret."
                emoji="🔍"
              />

              <div className="bg-white p-4 rounded-xl border-4 border-yellow-400 mt-4 flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <span className="text-3xl sm:text-4xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-purple-800">Play the Bad Guy Detector Game!</h3>
                  <p className="text-sm sm:text-base text-purple-800">
                    Can you spot all the tricks these bad guys use?
                  </p>
                </div>
                <Button className="w-full sm:w-auto sm:ml-auto bg-purple-600 hover:bg-purple-700 text-white font-bold border-2 border-purple-700">
                  Play Now!
                </Button>
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
