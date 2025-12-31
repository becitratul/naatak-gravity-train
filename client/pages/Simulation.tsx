import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, ArrowLeft, TrendingDown, MapPin, BookOpen, ExternalLink } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface City {
  name: string;
  lat: number;
  lng: number;
  country: string;
}

const CITIES: City[] = [
  { name: "New York", lat: 40.7128, lng: -74.0060, country: "USA" },
  { name: "London", lat: 51.5074, lng: -0.1278, country: "UK" },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, country: "Japan" },
  { name: "Paris", lat: 48.8566, lng: 2.3522, country: "France" },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, country: "Australia" },
  { name: "Mumbai", lat: 19.0760, lng: 72.8777, country: "India" },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, country: "UAE" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, country: "Singapore" },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333, country: "Brazil" },
  { name: "Cairo", lat: 30.0444, lng: 31.2357, country: "Egypt" },
  { name: "Moscow", lat: 55.7558, lng: 37.6173, country: "Russia" },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, country: "USA" },
  { name: "Beijing", lat: 39.9042, lng: 116.4074, country: "China" },
  { name: "Mexico City", lat: 19.4326, lng: -99.1332, country: "Mexico" },
  { name: "Lagos", lat: 6.5244, lng: 3.3792, country: "Nigeria" },
  { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, country: "Argentina" },
  { name: "Istanbul", lat: 41.0082, lng: 28.9784, country: "Turkey" },
  { name: "Seoul", lat: 37.5665, lng: 126.9780, country: "South Korea" },
  { name: "Toronto", lat: 43.6532, lng: -79.3832, country: "Canada" },
  { name: "Bangkok", lat: 13.7563, lng: 100.5018, country: "Thailand" },
  { name: "Cupertino", lat: 37.3230, lng: -122.0322, country: "USA" },
  { name: "New Delhi", lat: 28.6139, lng: 77.2090, country: "India" },
];

export default function Simulation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [brachistoProgress, setBrachistoProgress] = useState(0);
  const [showBrachistochrone, setShowBrachistochrone] = useState(false);
  const [speed, setSpeed] = useState(20);
  const [cityA, setCityA] = useState<string>("Cupertino");
  const [cityB, setCityB] = useState<string>("New Delhi");
  const animationRef = useRef<number>();

  const TOTAL_TIME = 2532; // 42 minutes 12 seconds in seconds (gravity tunnel)
  const BRACHISTO_TIME = 2268; // ~37.8 minutes - Brachistochrone is faster!
  const EARTH_RADIUS = 6371; // km

  // Calculate distance between two cities
  const calculateDistance = (city1: City, city2: City): number => {
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    
    const lat1 = toRad(city1.lat);
    const lat2 = toRad(city2.lat);
    const deltaLat = toRad(city2.lat - city1.lat);
    const deltaLng = toRad(city2.lng - city1.lng);

    const a = 
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  };

  const selectedCityA = CITIES.find(c => c.name === cityA)!;
  const selectedCityB = CITIES.find(c => c.name === cityB)!;
  const distance = calculateDistance(selectedCityA, selectedCityB);

  useEffect(() => {
    if (isPlaying) {
      let lastTime = performance.now();
      
      const animate = () => {
        const currentTime = performance.now();
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        // Update gravity tunnel progress
        setProgress((prev) => {
          const increment = (deltaTime * speed / TOTAL_TIME) * 100;
          const newProgress = prev + increment;
          return Math.min(newProgress, 100);
        });

        if (showBrachistochrone) {
          setBrachistoProgress((prev) => {
            const increment = (deltaTime * speed / BRACHISTO_TIME) * 100;
            const newProgress = prev + increment;
            return Math.min(newProgress, 100);
          });
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, showBrachistochrone, speed, TOTAL_TIME, BRACHISTO_TIME]);

  // Stop when both finish
  useEffect(() => {
    if (progress >= 100 && (!showBrachistochrone || brachistoProgress >= 100)) {
      setIsPlaying(false);
    }
  }, [progress, brachistoProgress, showBrachistochrone]);

  useEffect(() => {
    if (!showBrachistochrone) {
      setBrachistoProgress(0);
    }
  }, [showBrachistochrone]);

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setBrachistoProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Calculate train position along the chord (gravity tunnel - straight line)
  const getTrainPosition = () => {
    const t = progress / 100;
    
    const theta = distance / EARTH_RADIUS;
    const chordLength = 2 * EARTH_RADIUS * Math.sin(theta / 2);
    const x = t;
    const depth = Math.sin(t * Math.PI) * (chordLength / 2);
    
    return { x, depth, chordLength };
  };

  // Calculate position along Brachistochrone curve (cycloid)
  const getBrachistoPosition = () => {
    const t = brachistoProgress / 100;
    // Parametric cycloid: x = r(θ - sinθ), y = r(1 - cosθ)
    // We map t from 0 to 1 to θ from 0 to π
    const theta = t * Math.PI;
    const x = (theta - Math.sin(theta)) / Math.PI; // normalized to 0-1
    const y = (1 - Math.cos(theta)) / 2; // normalized depth factor
    return { x, y, t };
  };

  const position = getTrainPosition();
  const brachistoPosition = getBrachistoPosition();
  
  const currentSpeed = Math.sin(progress / 100 * Math.PI) * 8;
  const currentTime = (progress / 100) * TOTAL_TIME;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

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
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/concepts" className="text-slate-300 hover:text-white transition-colors text-sm hidden sm:block">Concepts</Link>
            <Link to="/history" className="text-slate-300 hover:text-white transition-colors text-sm hidden sm:block">History</Link>
            <a href="https://www.naatak.org/portfolio/2026-hole/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-xs sm:text-sm px-2 sm:px-4">
                <span className="hidden sm:inline">Book Tickets</span>
                <span className="sm:hidden">Book</span>
                <ExternalLink className="ml-1 sm:ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Gravity Train Simulation
          </h1>
          <p className="text-xl text-slate-300">
            Interactive visualization of a gravity train journey through Earth
          </p>
        </div>

        {/* City Selection */}
        <Card className="bg-slate-800/50 border-indigo-900/30 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-semibold text-white">Select Route</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-slate-300 mb-2 block">Departure City</Label>
              <Select value={cityA} onValueChange={setCityA} disabled={isPlaying}>
                <SelectTrigger className="bg-slate-700/50 border-indigo-900/50 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      {city.name}, {city.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-slate-300 mb-2 block">Arrival City</Label>
              <Select value={cityB} onValueChange={setCityB} disabled={isPlaying}>
                <SelectTrigger className="bg-slate-700/50 border-indigo-900/50 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      {city.name}, {city.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Route Distance:</span>
              <span className="text-2xl font-bold text-indigo-400">{distance.toFixed(0)} km</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Checkbox
              id="show-brachistochrone"
              checked={showBrachistochrone}
              disabled={isPlaying}
              onCheckedChange={(checked) => {
                setShowBrachistochrone(Boolean(checked));
              }}
            />
            <Label htmlFor="show-brachistochrone" className="text-slate-300">
              Show Brachistochrone curve comparison
            </Label>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Visualization - Two Earths side by side */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-indigo-900/30 p-6">
              <div
                className={`grid gap-4 ${showBrachistochrone ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 max-w-md mx-auto"}`}
              >
                {/* LEFT: Gravity Tunnel */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Gravity Tunnel</h3>
                  <p className="text-sm text-slate-400 mb-2">Straight path through Earth</p>
                  <div className="relative aspect-square">
                    <svg className="w-full h-full" viewBox="-20 0 240 200">
                      <defs>
                        <radialGradient id="earthGrad1">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="50%" stopColor="#3730a3" />
                          <stop offset="100%" stopColor="#1e1b4b" />
                        </radialGradient>
                      </defs>

                      {/* Earth */}
                      <circle cx="100" cy="100" r="80" fill="url(#earthGrad1)" opacity="0.4" />
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
                      
                      {/* Concentric circles */}
                      <circle cx="100" cy="100" r="53" fill="none" stroke="#4f46e5" strokeWidth="1" opacity="0.15" />
                      <circle cx="100" cy="100" r="27" fill="none" stroke="#4f46e5" strokeWidth="1" opacity="0.15" />
                      
                      {(() => {
                        const theta = distance / EARTH_RADIUS;
                        const angle = Math.min(theta, Math.PI / 2);
                        
                        const x1 = 100 - 80 * Math.sin(angle);
                        const y1 = 100 - 80 * Math.cos(angle);
                        const x2 = 100 + 80 * Math.sin(angle);
                        const y2 = 100 - 80 * Math.cos(angle);
                        
                        const trainX = x1 + (x2 - x1) * position.x;
                        const trainY = y1 + (y2 - y1) * position.x;

                        return (
                          <>
                            {/* Tunnel path */}
                            {(isPlaying || progress > 0) && (
                              <>
                                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth="4" strokeLinecap="round" />
                                <line x1={x1} y1={y1} x2={trainX} y2={trainY} stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                              </>
                            )}

                            {/* City markers */}
                            <circle cx={x1} cy={y1} r="6" fill="#60a5fa" />
                            <circle cx={x2} cy={y2} r="6" fill="#60a5fa" />
                            <text x={x1} y={y1 - 10} fill="#94a3b8" fontSize="7" textAnchor="middle" fontWeight="600">{cityA}</text>
                            <text x={x2} y={y2 - 10} fill="#94a3b8" fontSize="7" textAnchor="middle" fontWeight="600">{cityB}</text>

                            {/* Train ball */}
                            {(isPlaying || progress > 0) && (
                              <>
                                <circle cx={trainX} cy={trainY} r="8" fill="#f59e0b" />
                                <circle cx={trainX} cy={trainY} r="12" fill="#f59e0b" opacity="0.3" />
                              </>
                            )}
                            
                            {/* Core */}
                            <circle cx="100" cy="100" r="3" fill="#fbbf24" opacity="0.6" />
                          </>
                        );
                      })()}
                    </svg>
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-green-400">{progress.toFixed(1)}%</div>
                  <div className="text-xs text-slate-500">~42 min journey</div>
                </div>

                {/* RIGHT: Brachistochrone Curve */}
                {showBrachistochrone && (
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Brachistochrone</h3>
                  <p className="text-sm text-slate-400 mb-2">Fastest descent curve</p>
                  <div className="relative aspect-square">
                    <svg className="w-full h-full" viewBox="-20 0 240 200">
                      <defs>
                        <radialGradient id="earthGrad2">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="50%" stopColor="#3730a3" />
                          <stop offset="100%" stopColor="#1e1b4b" />
                        </radialGradient>
                      </defs>

                      {/* Earth */}
                      <circle cx="100" cy="100" r="80" fill="url(#earthGrad2)" opacity="0.4" />
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.5" />
                      
                      {/* Concentric circles */}
                      <circle cx="100" cy="100" r="53" fill="none" stroke="#4f46e5" strokeWidth="1" opacity="0.15" />
                      <circle cx="100" cy="100" r="27" fill="none" stroke="#4f46e5" strokeWidth="1" opacity="0.15" />
                      
                      {(() => {
                        const theta = distance / EARTH_RADIUS;
                        const angle = Math.min(theta, Math.PI / 2);
                        
                        const x1 = 100 - 80 * Math.sin(angle);
                        const y1 = 100 - 80 * Math.cos(angle);
                        const x2 = 100 + 80 * Math.sin(angle);
                        const y2 = 100 - 80 * Math.cos(angle);
                        
                        // Brachistochrone curve (quadratic bezier curving toward center)
                        const midX = 100;
                        const midY = 100 + 30;
                        
                        const t = brachistoPosition.t;
                        const bX = (1-t)*(1-t)*x1 + 2*(1-t)*t*midX + t*t*x2;
                        const bY = (1-t)*(1-t)*y1 + 2*(1-t)*t*midY + t*t*y2;

                        return (
                          <>
                            {/* Curve path */}
                            {(isPlaying || brachistoProgress > 0) && (
                              <>
                                <path
                                  d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
                                  fill="none"
                                  stroke="#374151"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                />
                                <path
                                  d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
                                  fill="none"
                                  stroke="#06b6d4"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                  pathLength={100}
                                  strokeDasharray={`${brachistoProgress} ${Math.max(0, 100 - brachistoProgress)}`}
                                  strokeDashoffset={0}
                                />
                              </>
                            )}

                            {/* City markers */}
                            <circle cx={x1} cy={y1} r="6" fill="#60a5fa" />
                            <circle cx={x2} cy={y2} r="6" fill="#60a5fa" />
                            <text x={x1} y={y1 - 10} fill="#94a3b8" fontSize="7" textAnchor="middle" fontWeight="600">{cityA}</text>
                            <text x={x2} y={y2 - 10} fill="#94a3b8" fontSize="7" textAnchor="middle" fontWeight="600">{cityB}</text>

                            {/* Ball */}
                            {(isPlaying || brachistoProgress > 0) && (
                              <>
                                <circle cx={bX} cy={bY} r="8" fill="#06b6d4" />
                                <circle cx={bX} cy={bY} r="12" fill="#06b6d4" opacity="0.3" />
                              </>
                            )}
                            
                            {/* Core */}
                            <circle cx="100" cy="100" r="3" fill="#fbbf24" opacity="0.6" />
                          </>
                        );
                      })()}
                    </svg>
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-cyan-400">{brachistoProgress.toFixed(1)}%</div>
                  <div className="text-xs text-slate-500">~38 min (faster!)</div>
                  {brachistoProgress >= 100 && progress < 100 && (
                    <div className="text-sm font-bold text-cyan-400 animate-pulse">WINNER!</div>
                  )}
                </div>
                )}
              </div>
            </Card>

              {/* Controls */}
              <Card className="bg-slate-800/50 border-indigo-900/30 p-6 mt-4">
                <div className="flex items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={togglePlay}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 w-32"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="mr-2 w-5 h-5" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 w-5 h-5" />
                        Play
                      </>
                    )}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleReset}
                    className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10"
                  >
                    <RotateCcw className="mr-2 w-5 h-5" />
                    Reset
                  </Button>
                </div>
              </Card>
          </div>

          {/* Stats & Controls */}
          <div className="space-y-6">
            {/* Real-time Stats */}
            <Card className="bg-slate-800/50 border-indigo-900/30 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Live Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-400 mb-1">Elapsed Time</div>
                  <div className="text-3xl font-bold text-indigo-400">
                    {minutes}:{seconds.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="h-px bg-slate-700"></div>
                {showBrachistochrone ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-green-400 mb-1">Tunnel Speed</div>
                        <div className="text-xl font-bold text-purple-400">
                          {currentSpeed.toFixed(2)} <span className="text-xs">km/s</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-cyan-400 mb-1">Cycloid Speed</div>
                        <div className="text-xl font-bold text-cyan-400">
                          {(Math.sin(brachistoProgress / 100 * Math.PI) * 8).toFixed(2)} <span className="text-xs">km/s</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-slate-700"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-green-400 mb-1">Tunnel Depth</div>
                        <div className="text-lg font-bold text-green-400">
                          {position.depth.toFixed(0)} <span className="text-xs">km</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-cyan-400 mb-1">Cycloid Depth</div>
                        <div className="text-lg font-bold text-cyan-400">
                          {(Math.sin(brachistoProgress / 100 * Math.PI) * distance / 2 * 0.3).toFixed(0)} <span className="text-xs">km</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Current Speed</div>
                      <div className="text-3xl font-bold text-purple-400">
                        {currentSpeed.toFixed(2)} <span className="text-lg">km/s</span>
                      </div>
                    </div>
                    <div className="h-px bg-slate-700"></div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Max Depth</div>
                      <div className="text-2xl font-bold text-green-400">
                        {position.depth.toFixed(0)} <span className="text-sm">km</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Card>

            {/* Settings */}
            <Card className="bg-slate-800/50 border-indigo-900/30 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Simulation Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-400">Animation Speed</span>
                    <span className="text-sm font-semibold text-indigo-300">{speed}x</span>
                  </div>
                  <Slider
                    value={[speed]}
                    onValueChange={([v]) => setSpeed(v)}
                    min={1}
                    max={20}
                    step={1}
                    className="cursor-pointer"
                    disabled={isPlaying}
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    <span>1x</span>
                    <span>20x</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Info */}
            <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30 p-6">
              <h3 className="text-sm font-semibold text-indigo-300 mb-2">Did You Know?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                No matter the distance between {cityA} and {cityB}, the journey always takes approximately 42 minutes and 12 seconds!
              </p>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/30 border-indigo-900/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Phase 1: Acceleration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              The train accelerates as it falls toward Earth's center, gaining speed due to gravity. No propulsion needed!
            </p>
          </Card>
          
          <Card className="bg-slate-800/30 border-indigo-900/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Phase 2: Maximum Speed</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              At the midpoint (deepest point), the train reaches its maximum velocity of approximately 8 km/s.
            </p>
          </Card>
          
          <Card className="bg-slate-800/30 border-indigo-900/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Phase 3: Deceleration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Gravity naturally slows the train as it climbs toward the destination, arriving with zero velocity.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
