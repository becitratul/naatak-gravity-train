import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingDown, BookOpen, Atom, Zap, Globe, ExternalLink } from "lucide-react";

export default function Concepts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-indigo-900/30 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              GravityTrain
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/simulation" className="text-slate-300 hover:text-white transition-colors">Simulation</Link>
            <Link to="/concepts" className="text-white font-medium">Concepts</Link>
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

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            The Physics Behind the Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover the fascinating science that makes gravity trains possible — and why not all paths are created equal.
          </p>
        </div>

        {/* Gravity Tunnel Section */}
        <Card className="bg-slate-800/50 border-indigo-900/30 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-green-400">The Gravity Tunnel</h2>
          </div>
          
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              A <strong className="text-white">gravity tunnel</strong> (or gravity train) is a theoretical transportation system that uses Earth's gravitational field to move passengers between any two points on the planet — with <em>no fuel required</em>.
            </p>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">How It Works</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>A straight tunnel is drilled between two cities through Earth's interior</li>
                <li>A frictionless train is placed at one end and released</li>
                <li>Gravity accelerates the train toward Earth's center</li>
                <li>The train overshoots the center and decelerates as it climbs toward the destination</li>
                <li>It arrives with zero velocity — ready for passengers to exit!</li>
              </ol>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-3">🎯 The Amazing 42-Minute Rule</h3>
              <p>
                No matter the distance between two cities — whether it's New York to London or Cupertino to New Delhi — the journey <strong className="text-white">always takes approximately 42 minutes and 12 seconds</strong>. This remarkable constant emerges from the mathematics of simple harmonic motion inside a uniform sphere.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <h4 className="font-semibold text-indigo-300 mb-2">Maximum Speed</h4>
                <p className="text-sm">At the deepest point, the train reaches ~8 km/s (about 18,000 mph)</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <h4 className="font-semibold text-indigo-300 mb-2">Maximum Depth</h4>
                <p className="text-sm">For antipodal points, the train passes through Earth's center at 6,371 km deep</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Brachistochrone Section */}
        <Card className="bg-slate-800/50 border-indigo-900/30 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-cyan-400">The Brachistochrone Curve</h2>
          </div>
          
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              The <strong className="text-white">brachistochrone</strong> (from Greek: "shortest time") is the curve of fastest descent under gravity. If you release a ball on this curved track, it will reach the endpoint <em>faster than any other path</em> — including a straight line!
            </p>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Historical Discovery</h3>
              <p className="mb-3">
                In 1696, Johann Bernoulli posed this challenge to mathematicians: "What is the curve of fastest descent?" The problem was solved independently by Newton, Leibniz, L'Hôpital, and Johann's brother Jakob.
              </p>
              <p>
                The answer? A <strong className="text-white">cycloid</strong> — the curve traced by a point on a rolling wheel. This elegant solution connects physics, calculus, and geometry in a beautiful way.
              </p>
            </div>

            <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">⚡ Why Is It Faster?</h3>
              <p>
                The brachistochrone curve initially drops more steeply, allowing the object to <strong className="text-white">gain speed early</strong>. Even though the total path is longer, the higher average velocity more than compensates — resulting in a shorter travel time.
              </p>
            </div>
          </div>
        </Card>

        {/* Why Gravity Train Can't Use Brachistochrone */}
        <Card className="bg-slate-800/50 border-indigo-900/30 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
              <Atom className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-amber-400">Why Can't Gravity Trains Use the Brachistochrone?</h2>
          </div>
          
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              This is where physics gets fascinating! While the brachistochrone is the fastest path in a <em>uniform gravitational field</em>, a gravity train operates in a very different environment.
            </p>
            
            <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">🌍 The Key Difference: Variable Gravity</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span><strong className="text-white">Surface:</strong> Gravity is 9.8 m/s² (what we feel every day)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span><strong className="text-white">Halfway to center:</strong> Gravity drops to ~4.9 m/s²</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span><strong className="text-white">At Earth's center:</strong> Gravity is exactly 0!</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">The Physics Breakdown</h3>
              <div className="space-y-4">
                <p>
                  <strong className="text-cyan-400">Brachistochrone assumption:</strong> Constant gravity pulling in one direction (like dropping a ball in your room). The cycloid is optimal here.
                </p>
                <p>
                  <strong className="text-green-400">Gravity tunnel reality:</strong> Gravity varies linearly with depth and always points toward Earth's center. Inside Earth, you experience less gravitational pull because only the mass "below" you contributes.
                </p>
                <p>
                  <strong className="text-amber-400">Result:</strong> The mathematics changes completely! For a gravity train, the <em>straight-line tunnel</em> actually produces simple harmonic motion — like a perfect pendulum — and this is already the optimal path for this specific force field.
                </p>
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">🔬 In Summary</h3>
              <p>
                The brachistochrone is the fastest path in <em>constant</em> gravity. But inside Earth, gravity isn't constant — it decreases as you approach the center. This fundamentally changes the problem, and the straight tunnel becomes the natural "least-time" path for this unique gravitational environment.
              </p>
            </div>
          </div>
        </Card>

        {/* About the Play */}
        <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Experience "Hole" — A Naatak Production</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              This simulation is part of an interactive lobby experience for <strong className="text-white">"Hole"</strong>, an upcoming theatrical production exploring the fascinating concept of gravity trains and the human stories that unfold when science fiction becomes reality.
            </p>
            <a href="https://www.naatak.org/portfolio/2026-hole/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500">
                Book Your Gravity Train Tickets
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Link to="/simulation">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500">
              Try the Simulation
            </Button>
          </Link>
          <Link to="/">
            <Button size="lg" variant="outline" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
