import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Users, Award, Shield } from 'lucide-react';

// Work items data
const workItems = [
  {
    id: 1,
    title: "Halo2 Critical Vulnerability Discovery",
    subtitle: "20 LoC Proof of Concept",
    description: "Discovered a critical soundness error in Halo2's constraint system that could have compromised protocol security.",
    impact: "Protocol-level soundness error",
    difficulty: "Expert",
    category: "Security Research",
    author: "teddav",
    authorAvatar: "https://avatars.githubusercontent.com/teddav",
    date: "Nov 2024",
    tags: ["Critical", "ZK Circuits", "Halo2", "Soundness"],
    metrics: {
      severity: "Critical",
      protocols: "15+",
      recognition: "Industry-wide"
    },
    links: {
      github: "https://github.com/example",
      blog: "https://blog.electisec.com/halo2-vulnerability"
    }
  },
  {
    id: 2,
    title: "Verifier Validator Registry Proposal",
    subtitle: "Ethereum Foundation Research",
    description: "Comprehensive proposal for standardizing ZK verifier validation across the Ethereum ecosystem.",
    impact: "Protocol standardization",
    difficulty: "Research",
    category: "Standards",
    author: "Nobita",
    authorAvatar: "https://avatars.githubusercontent.com/nobita",
    date: "Oct 2024",
    tags: ["EF Research", "Standards", "Verification", "Ethereum"],
    metrics: {
      severity: "High",
      protocols: "All Ethereum",
      recognition: "EF Grant"
    },
    links: {
      github: "https://github.com/ethereum/EIPs",
      blog: "https://blog.electisec.com/verifier-registry"
    }
  },
  {
    id: 3,
    title: "Underconstrained Circuit Detection",
    subtitle: "Automated Security Analysis",
    description: "Advanced tooling for detecting underconstrained vulnerabilities in ZK circuits with 90% accuracy.",
    impact: "Automated vulnerability detection",
    difficulty: "Expert",
    category: "Security Tooling",
    author: "nullity",
    authorAvatar: "https://avatars.githubusercontent.com/nullity",
    date: "Sep 2024",
    tags: ["Automation", "Circuit Analysis", "Security", "Tooling"],
    metrics: {
      severity: "High",
      protocols: "25+",
      recognition: "Open Source"
    },
    links: {
      github: "https://github.com/electisec/circuit-analyzer",
      blog: "https://blog.electisec.com/circuit-detection"
    }
  },
  {
    id: 4,
    title: "zkVM Security Framework",
    subtitle: "Comprehensive Audit Methodology",
    description: "First-of-its-kind security framework for auditing zero-knowledge virtual machines.",
    impact: "Industry standard methodology",
    difficulty: "Expert",
    category: "Methodology",
    author: "gp2m",
    authorAvatar: "https://avatars.githubusercontent.com/gp2m",
    date: "Aug 2024",
    tags: ["zkVM", "Audit Framework", "Methodology", "Security"],
    metrics: {
      severity: "High",
      protocols: "8+",
      recognition: "Industry Standard"
    },
    links: {
      github: "https://github.com/electisec/zkvm-framework",
      blog: "https://blog.electisec.com/zkvm-security"
    }
  },
  {
    id: 5,
    title: "MPC Protocol Optimization",
    subtitle: "40% Performance Improvement",
    description: "Novel optimizations to multi-party computation protocols reducing computation time significantly.",
    impact: "Performance breakthrough",
    difficulty: "Research",
    category: "Performance",
    author: "Oba",
    authorAvatar: "https://avatars.githubusercontent.com/oba",
    date: "Jul 2024",
    tags: ["MPC", "Optimization", "Performance", "Research"],
    metrics: {
      severity: "Medium",
      protocols: "12+",
      recognition: "Research Paper"
    },
    links: {
      github: "https://github.com/electisec/mpc-optimization",
      blog: "https://blog.electisec.com/mpc-optimization"
    }
  },
  {
    id: 6,
    title: "Formal Verification Suite",
    subtitle: "Mathematical Proof System",
    description: "Comprehensive formal verification tools for proving ZK circuit correctness mathematically.",
    impact: "Mathematical guarantees",
    difficulty: "Expert",
    category: "Formal Methods",
    author: "teddav",
    authorAvatar: "https://avatars.githubusercontent.com/teddav",
    date: "Jun 2024",
    tags: ["Formal Verification", "Mathematics", "Proofs", "Correctness"],
    metrics: {
      severity: "High",
      protocols: "20+",
      recognition: "Academic"
    },
    links: {
      github: "https://github.com/electisec/formal-verification",
      blog: "https://blog.electisec.com/formal-verification"
    }
  }
];

function Highlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered && scrollRef.current) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const scrollAmount = 400;
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          
          // Check if we've reached the end
          if (scrollRef.current.scrollLeft >= maxScroll - 10) {
            // Reset to beginning
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Continue scrolling
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 3000); // Auto-scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Expert': return 'bg-red-100 text-red-700 border-red-200';
      case 'Research': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Advanced': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Critical': return <Shield className="w-4 h-4 text-red-500" />;
      case 'High': return <Award className="w-4 h-4 text-orange-500" />;
      default: return <Users className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Checkout our best work
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge research and security discoveries that shape the ZK ecosystem
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors shadow-md hover:shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors shadow-md hover:shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 sm:gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {workItems.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[380px] max-w-[380px] sm:min-w-[340px] sm:max-w-[340px] bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.authorAvatar} 
                    alt={item.author}
                    className="w-10 h-10 rounded-full border border-gray-200"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{item.author}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {getSeverityIcon(item.metrics.severity)}
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-green-600 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Impact & Metrics */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-900 mb-2">Impact:</div>
                <div className="text-sm text-green-600 font-medium mb-3">{item.impact}</div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-medium text-gray-700">Protocols</div>
                    <div className="text-gray-600">{item.metrics.protocols}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-medium text-gray-700">Recognition</div>
                    <div className="text-gray-600">{item.metrics.recognition}</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{item.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors">
                  View Details
                  <ExternalLink className="w-3 h-3" />
                </button>
                <button className="flex items-center justify-center p-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                  <Github className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors">
            View All Research & Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Highlights;