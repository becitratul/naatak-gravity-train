import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingDown, Users, Theater, Sparkles, Heart, Globe, ExternalLink, BookOpen } from "lucide-react";

export default function About() {
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
            <Link to="/concepts" className="text-slate-300 hover:text-white transition-colors">Concepts</Link>
            <Link to="/history" className="text-slate-300 hover:text-white transition-colors">History</Link>
            <Link to="/about" className="text-white font-medium">About</Link>
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
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8">
            <Theater className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-300">A Naatak Production</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            About This Experience
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to the interactive lobby experience for <strong className="text-white">"Hole"</strong> — 
            a groundbreaking theatrical production that brings the science fiction of gravity trains to life on stage.
          </p>
        </div>
      </section>

      {/* About the Play */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Theater className="w-6 h-6 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-amber-400">"Hole" — The Play</h2>
            </div>
            
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                What if you could travel anywhere on Earth in just 42 minutes? <strong className="text-white">"Hole"</strong> explores 
                this tantalizing possibility through the lens of human connection, ambition, and the unintended consequences 
                of revolutionary technology.
              </p>
              
              <p className="text-lg leading-relaxed">
                Set in a near-future where gravity trains have become reality, the play follows characters whose lives 
                intersect in unexpected ways — from the scientists who made it possible to the everyday people whose 
                worlds are transformed by instant global travel.
              </p>

              <div className="pt-6">
                <a href="https://www.naatak.org/portfolio/2026-hole/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500">
                    Get Your Tickets
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About Naatak */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About Naatak</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Bringing South Asian stories to life through innovative theater
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-indigo-900/30 p-6 text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Theater</h3>
              <p className="text-slate-400 text-sm">
                One of the largest Indian theater groups in the United States, serving the Bay Area since 1994.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-indigo-900/30 p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Original Productions</h3>
              <p className="text-slate-400 text-sm">
                Creating thought-provoking original works that blend cultural heritage with contemporary themes.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-indigo-900/30 p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Volunteer-Driven</h3>
              <p className="text-slate-400 text-sm">
                Powered by passionate volunteers dedicated to the art of storytelling and theatrical excellence.
              </p>
            </Card>
          </div>

          <div className="text-center mt-10">
            <a href="https://www.naatak.org" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10">
                Visit Naatak.org
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About This Website */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About This Interactive Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Designed for the theater lobby to immerse audiences in the science behind the fiction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-indigo-900/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Interactive Simulation</h3>
              </div>
              <p className="text-slate-400">
                Explore real physics concepts through our gravity train simulator. Select any two cities and watch 
                how gravity would propel you through Earth's interior.
              </p>
              <div className="mt-4">
                <Link to="/simulation">
                  <Button variant="outline" size="sm" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10">
                    Try Simulation
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-indigo-900/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Physics Concepts</h3>
              </div>
              <p className="text-slate-400">
                Dive deep into the science — from gravity tunnels to Brachistochrone curves. Understand why 
                every journey takes exactly 42 minutes.
              </p>
              <div className="mt-4">
                <Link to="/concepts">
                  <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10">
                    Learn Concepts
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the Plunge?</h2>
          <p className="text-slate-300 mb-8">
            Experience "Hole" live on stage and discover what happens when humanity digs too deep.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.naatak.org/portfolio/2026-hole/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500">
                Book Your Gravity Train
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link to="/simulation">
              <Button size="lg" variant="outline" className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10">
                Try the Simulation First
              </Button>
            </Link>
          </div>
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
