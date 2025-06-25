import React, { useState, useEffect } from 'react';
import { Shield, Award, Users, Zap, CheckCircle, ArrowRight, ExternalLink, Calendar, DollarSign, AlertTriangle, Star, Target, Microscope, Brain } from 'lucide-react';

// Boosted audit data
const boostedAudits = [
  {
    id: 1,
    name: "RLN",
    title: "Rate Limiting Nullifier Protocol",
    client: "Privacy & Scaling Explorations",
    tvl: "$50M",
    findings: 8,
    severity: "High",
    timeframe: "3 weeks",
    status: "Completed",
    methodology: "Formal Verification + Fellowship Review",
    specialFeatures: ["Underconstrained Circuit Detection", "Formal Mathematical Proofs", "Differential Testing"],
    testimonial: "Critical bugs found that traditional audits missed. The formal verification approach was invaluable.",
    category: "Privacy Protocol",
    year: "2024"
  },
  {
    id: 2,
    name: "ECASA",
    title: "Elliptic Curve Anonymous Signature Aggregation",
    client: "Research Consortium",
    tvl: "$25M",
    findings: 12,
    severity: "Critical",
    timeframe: "4 weeks",
    status: "Completed",
    methodology: "Multi-Expert Fellowship + Advanced Tooling",
    specialFeatures: ["8+ Expert Review", "Custom Vulnerability Detection", "Property-Based Testing"],
    testimonial: "The depth of analysis was unprecedented. Found issues in cryptographic primitive usage.",
    category: "Signature Scheme",
    year: "2024"
  },
  {
    id: 3,
    name: "Summa",
    title: "Proof of Solvency Protocol",
    client: "Exchange Infrastructure",
    tvl: "$100M",
    findings: 6,
    severity: "Medium",
    timeframe: "2 weeks",
    status: "Completed",
    methodology: "Collaborative Verification + Code Analysis",
    specialFeatures: ["Design Bug Detection", "End-to-End Security", "Zkvm Integration Testing"],
    testimonial: "Comprehensive coverage of both circuit and integration layers. Exceptional thoroughness.",
    category: "Financial Protocol",
    year: "2024"
  },
  {
    id: 4,
    name: "Sigma",
    title: "Anonymous Voting System",
    client: "Governance Platform",
    tvl: "$15M",
    findings: 4,
    severity: "Low",
    timeframe: "2 weeks",
    status: "Completed",
    methodology: "Fellowship-Powered Analysis",
    specialFeatures: ["Privacy Property Verification", "Anonymity Set Analysis", "Soundness Proofs"],
    testimonial: "Caught subtle privacy leaks that could have compromised anonymity guarantees.",
    category: "Governance",
    year: "2024"
  }
];

// What makes audits "boosted"
const boostedFeatures = [
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Fellowship-Powered",
    description: "8+ ZK specialists review each circuit vs typical 1-2 auditor teams",
    details: [
      "200+ fellowship alumni network",
      "Cross-validation by multiple experts",
      "Collaborative bug hunting sessions",
      "Peer review of all findings"
    ]
  },
  {
    icon: <Microscope className="w-8 h-8 text-green-500" />,
    title: "Advanced Formal Verification",
    description: "Mathematical proofs of circuit correctness beyond traditional testing",
    details: [
      "Complete formal verification of zkVM instructions",
      "Property-based testing for soundness",
      "Differential testing against reference implementations", 
      "Automated constraint analysis"
    ]
  },
  {
    icon: <Brain className="w-8 h-8 text-green-500" />,
    title: "Custom Security Tooling",
    description: "Proprietary tools for detecting ZK-specific vulnerabilities",
    details: [
      "Underconstrained circuit detection (90% accuracy)",
      "Design bug identification algorithms",
      "Cryptographic primitive verification",
      "End-to-end protocol analysis"
    ]
  },
  {
    icon: <Target className="w-8 h-8 text-green-500" />,
    title: "Multi-Layer Analysis", 
    description: "Beyond circuits: protocol design, integration, and operational security",
    details: [
      "Protocol design security review",
      "Smart contract integration analysis",
      "Operational security assessment",
      "Privacy property verification"
    ]
  }
];

function BoostedAuditsSection() {
  const [selectedAudit, setSelectedAudit] = useState<number | null>(0);
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-hover through audit tabs
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setSelectedAudit(prev => {
          if (prev === null) return 0;
          return (prev + 1) % boostedAudits.length;
        });
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Auto-cycle through features
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % boostedFeatures.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleAuditHover = (index: number, hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setSelectedAudit(index);
    }
  };

  const handleFeatureHover = (index: number, hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setActiveFeature(index);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Critical': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'High': return <Shield className="w-4 h-4 text-orange-500" />;
      case 'Medium': return <Award className="w-4 h-4 text-yellow-500" />;
      default: return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Boosted Audits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Premium ZK security assessments with fellowship-powered depth, formal verification, 
            and cutting-edge tooling that traditional audits can't match.
          </p>
          
          {/* What are Boosted Audits CTA */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-200 transition-colors cursor-pointer group">
            <Shield className="w-5 h-5" />
            <span>What are boosted audits?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Featured Audits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {boostedAudits.map((audit, index) => (
            <div 
              key={audit.id} 
              className={`bg-white rounded-2xl p-6 border-2 transition-all duration-500 cursor-pointer hover:shadow-lg ${
                selectedAudit === index 
                  ? 'border-green-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
              onClick={() => setSelectedAudit(selectedAudit === index ? null : index)}
              onMouseEnter={() => handleAuditHover(index, true)}
              onMouseLeave={() => handleAuditHover(index, false)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{audit.name}</h3>
                <div className="flex items-center gap-1">
                  {getSeverityIcon(audit.severity)}
                  <span className={`px-2 py-1 text-xs font-medium rounded border ${getSeverityColor(audit.severity)}`}>
                    {audit.severity}
                  </span>
                </div>
              </div>

              {/* Content */}
              <p className="text-sm text-gray-600 mb-4">{audit.title}</p>
              <p className="text-xs text-green-600 font-medium mb-4">{audit.client}</p>

              {/* Key Metrics */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">TVL Protected:</span>
                  <span className="font-semibold text-green-600">{audit.tvl}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Findings:</span>
                  <span className="font-semibold">{audit.findings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-semibold">{audit.timeframe}</span>
                </div>
              </div>

              {/* Status */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">{audit.status}</span>
                </div>
              </div>

              {/* Expand indicator */}
              <div className="mt-3 text-center">
                <ArrowRight className={`w-4 h-4 text-green-500 mx-auto transition-transform ${
                  selectedAudit === index ? 'rotate-90' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Audit View */}
        {selectedAudit !== null && (
          <div className="bg-white rounded-2xl p-8 mb-16 border border-green-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Audit Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {boostedAudits[selectedAudit].name} - Detailed Analysis
                </h3>
                <p className="text-gray-600 mb-6">{boostedAudits[selectedAudit].title}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Methodology:</h4>
                    <p className="text-green-600 font-medium">{boostedAudits[selectedAudit].methodology}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Special Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {boostedAudits[selectedAudit].specialFeatures.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Client Testimonial:</h4>
                    <blockquote className="text-gray-600 italic border-l-4 border-green-500 pl-4">
                      "{boostedAudits[selectedAudit].testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Right: Metrics & Actions */}
              <div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Audit Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{boostedAudits[selectedAudit].tvl}</div>
                      <div className="text-sm text-gray-600">TVL Secured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{boostedAudits[selectedAudit].findings}</div>
                      <div className="text-sm text-gray-600">Total Findings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{boostedAudits[selectedAudit].timeframe}</div>
                      <div className="text-sm text-gray-600">Completion Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">8+</div>
                      <div className="text-sm text-gray-600">Expert Reviewers</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <button className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors">
                    View Full Report
                  </button>
                  <button className="w-full px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors">
                    Download Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* What Makes Audits "Boosted" */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Our Audits "Boosted"?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boostedFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 border-2 transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? 'border-green-500 shadow-lg' 
                    : 'border-gray-200 hover:border-green-300'
                }`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => handleFeatureHover(index, true)}
                onMouseLeave={() => handleFeatureHover(index, false)}
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t">
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison: Traditional vs Boosted */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Traditional Audits vs Boosted Audits
          </h3>
          
          <div className="flex flex-row sm:flex-col item-center justify-center gap-8">
            {/* Traditional Audits */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Traditional ZK Audits</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span className="text-gray-600">1-2 auditors review circuits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span className="text-gray-600">Manual code review only</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span className="text-gray-600">Limited to surface-level bugs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span className="text-gray-600">Miss design-level vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span className="text-gray-600">No formal verification</span>
                </li>
              </ul>
            </div>

            {/* Boosted Audits */}
            <div className="border-2 border-green-500 rounded-xl p-6 bg-green-50">
              <h4 className="text-xl font-semibold text-green-900 mb-4">Electisec Boosted Audits</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-green-800">8+ fellowship experts collaborate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-green-800">Formal verification + custom tooling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-green-800">Deep design-level bug detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-green-800">Mathematical proofs of correctness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-green-800">90% accuracy in finding critical bugs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for a Boosted Audit?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join protocols securing $2.1B+ TVL with our advanced methodology
          </p>
          <div className="flex flex-row sm:flex-col gap-4 justify-center">
            <button className="px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors shadow-lg">
              Get Your Boosted Audit
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors">
              Download Methodology Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostedAuditsSection;