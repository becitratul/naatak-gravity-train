import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Globe, Timer, TrendingDown, BookOpen, ExternalLink, Users } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-indigo-900/30 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              GravityTrain
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/simulation" className="text-slate-300 hover:text-white transition-colors">Simulation</Link>
            <Link to="/concepts" className="text-slate-300 hover:text-white transition-colors">Concepts</Link>
            <Link to="/history" className="text-slate-300 hover:text-white transition-colors">History</Link>
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
            <a href="https://www.naatak.org/portfolio/2026-hole/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500">
                Book Tickets
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-8">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">Revolutionary Transportation Concept</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Travel Anywhere on Earth in 42 Minutes
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Discover the physics-defying potential of gravity trains—a theoretical transportation system 
              that uses Earth's gravity to accelerate through tunnels, reaching any destination in the same time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/simulation">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8">
                  Try the Simulation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/concepts">
                <Button size="lg" variant="outline" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Learn the Physics
                </Button>
              </Link>
            </div>
          </div>

          {/* Animated visualization */}
          <div className="mt-20 relative">
            <div className="relative h-64 flex items-center justify-center">
              <svg className="w-full max-w-4xl h-full" viewBox="0 0 800 200">
                {/* Earth cross-section */}
                <circle cx="400" cy="100" r="80" fill="url(#earthGradient)" opacity="0.3" />
                <defs>
                  <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                  <linearGradient id="tunnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                
                {/* Tunnel path */}
                <path 
                  d="M 150 100 Q 400 180 650 100" 
                  stroke="url(#tunnelGradient)" 
                  strokeWidth="4" 
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                
                {/* Train */}
                <g className="animate-pulse">
                  <circle cx="400" cy="140" r="8" fill="#a78bfa" />
                  <circle cx="400" cy="140" r="12" fill="#a78bfa" opacity="0.3" />
                </g>
                
                {/* Endpoint markers */}
                <circle cx="150" cy="100" r="6" fill="#60a5fa" />
                <circle cx="650" cy="100" r="6" fill="#60a5fa" />
                
                {/* Labels */}
                <text x="150" y="85" fill="#94a3b8" fontSize="12" textAnchor="middle">Start</text>
                <text x="650" y="85" fill="#94a3b8" fontSize="12" textAnchor="middle">End</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Concept</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A gravity train is a theoretical means of transportation that uses gravity to accelerate through a straight tunnel between any two points on Earth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-indigo-900/30 p-8 hover:border-indigo-700/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Straight Path</h3>
              <p className="text-slate-400 leading-relaxed">
                The train travels through a straight tunnel drilled through the Earth, not following the curved surface.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-indigo-900/30 p-8 hover:border-indigo-700/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gravity Acceleration</h3>
              <p className="text-slate-400 leading-relaxed">
                Gravity accelerates the train as it falls toward the center, reaching incredible speeds at the midpoint.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-indigo-900/30 p-8 hover:border-indigo-700/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">42 Minutes</h3>
              <p className="text-slate-400 leading-relaxed">
                Remarkably, the journey takes approximately 42 minutes regardless of the distance between endpoints.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Physics Section */}
      <section id="physics" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">The Physics Behind It</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300 mb-2">Simple Harmonic Motion</h3>
                  <p className="text-slate-400 leading-relaxed">
                    The gravity train follows the principles of simple harmonic motion, where the restoring force is proportional to the displacement from equilibrium.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300 mb-2">Constant Travel Time</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Due to the mathematics of gravity and harmonic motion, all gravity train routes take the same time—approximately 42 minutes and 12 seconds.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300 mb-2">Zero Energy Required</h3>
                  <p className="text-slate-400 leading-relaxed">
                    In an ideal frictionless vacuum tunnel, the train would require no energy beyond the initial release, making it perfectly efficient.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-indigo-900/30 p-8">
              <div className="bg-slate-900/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Key Facts</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Transit Time</span>
                    <span className="text-2xl font-bold text-indigo-400">42:12</span>
                  </div>
                  <div className="h-px bg-slate-700"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Max Speed (at center)</span>
                    <span className="text-2xl font-bold text-purple-400">~8 km/s</span>
                  </div>
                  <div className="h-px bg-slate-700"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Energy Cost</span>
                    <span className="text-2xl font-bold text-green-400">Zero*</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">*In ideal conditions (vacuum, no friction)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Theoretical Benefits</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              While currently theoretical, gravity trains present fascinating possibilities for future transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ultra-Fast", description: "Reach any point on Earth in under an hour", icon: "⚡" },
              { title: "Energy Efficient", description: "Minimal energy required in ideal conditions", icon: "🌱" },
              { title: "Predictable", description: "Consistent travel time regardless of distance", icon: "⏱️" },
              { title: "Direct Routes", description: "Straight-line paths between destinations", icon: "📍" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-indigo-900/30 rounded-lg p-6 hover:border-indigo-700/50 transition-all">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Experience "Hole"</h2>
          <p className="text-slate-300 mb-8 text-lg">
            This interactive experience is part of Naatak's upcoming theatrical production exploring gravity trains and the human stories that unfold when science fiction meets reality.
          </p>
          <a href="https://www.naatak.org/portfolio/2026-hole/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500">
              Book Your Gravity Train Tickets
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-900/30 bg-slate-950/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                GravityTrain
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/simulation" className="text-slate-400 hover:text-white text-sm transition-colors">Simulation</Link>
              <Link to="/concepts" className="text-slate-400 hover:text-white text-sm transition-colors">Concepts</Link>
              <Link to="/history" className="text-slate-400 hover:text-white text-sm transition-colors">History</Link>
              <Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About</Link>
              <a href="https://www.naatak.org/portfolio/2026-hole/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">Naatak</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
              An interactive lobby experience for "Hole" — A Naatak Production © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
