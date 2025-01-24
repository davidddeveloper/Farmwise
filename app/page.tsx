import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

//Brain,
//Languages,
import {
  Leaf,
  Sprout,
  Users,
  BarChart3,
  ChevronRight,
  MessageSquare,
  Cpu,
  Volume2,
} from "lucide-react"
import Image from "next/image"
import FarmWise from "@/public/images/farm-wise.png"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">FarmWise</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#problem">
            Why FarmWise
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#impact">
            Impact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Specialized AI for all Farmers & Aspiring Farmers
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Empowering farmers with cutting-edge AI solutions for optimized agriculture. Know what to plant,
                    when to plant, and how to plant.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700" size="lg">
                    Join us now
                  </Button>
                  <Button variant="outline" size="lg">
                    Request demo
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                <Image
                  alt="Farmer using FarmWise app in the field"
                  className="object-cover w-full h-full"
                  height="600"
                  width="800"
                  src={FarmWise}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Problem Statement</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Limited Access to Information</h3>
                      <p className="text-gray-500">Lack of access to timely and accurate agricultural information</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Insufficient Tools</h3>
                      <p className="text-gray-500">
                        Insufficient localized tools for education and sustainable farming
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Technology Gap</h3>
                      <p className="text-gray-500">
                        Limited use of technology in small-scale farming to optimize yields and reduce waste
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Our Solution</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">AI-Powered Education</h3>
                      <p className="text-gray-500">
                        Tailored, localized educational tools with AI chatbot and voice assistance
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">IoT Integration</h3>
                      <p className="text-gray-500">Real-time soil monitoring and precision farming tools</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Sustainable Practices</h3>
                      <p className="text-gray-500">Support for eco-friendly farming methods to combat climate change</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Sets Us Apart</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Cutting-edge technology meets agricultural expertise
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold mt-4">AI-Driven Mentorship</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Personalized guidance for your specific farming needs
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Cpu className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold mt-4">IoT Precision Tools</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Real-time soil and crop monitoring systems
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Volume2 className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold mt-4">Voice Assistance</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Access knowledge in your local language
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">2030 Impact Goals</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Making a difference in agriculture and sustainability
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-12 w-12 text-green-600" />
                <h3 className="text-2xl font-bold">1M+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Farmers trained globally</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <BarChart3 className="h-12 w-12 text-green-600" />
                <h3 className="text-2xl font-bold">30%</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reduction in agricultural waste</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Sprout className="h-12 w-12 text-green-600" />
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Coverage in Sierra Leone</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the FarmWise Movement</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Whether you're a farmer, educator, or sustainability advocate, your participation is key. Together, we
                  can build a smarter, greener future.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button className="bg-green-600 hover:bg-green-700" size="lg">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FarmWise. All rights reserved.</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Created by David Conteh and Lukman Aufbau</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}