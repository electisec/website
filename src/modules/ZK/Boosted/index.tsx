import React, { useState, useEffect } from 'react';
import { Shield, Award, Users, Zap, CheckCircle, ArrowRight, ExternalLink, Calendar, DollarSign, AlertTriangle, Star, Target, Microscope, Brain } from 'lucide-react';

// Boosted audit data
const boostedAudits = [
  {
    id: 1,
    name: "RLN",
    title: "Rate Limiting Nullifier Protocol",
    client: "Privacy & Scaling Explorations",
    findings: 8,
    severity: "circom",
    methodology: "Formal Verification + Fellowship Review",
    specialFeatures: ["Underconstrained Circuit Detection", "Formal Mathematical Proofs", "Differential Testing"],
    category: "Privacy Protocol",
  },
  {
    id: 2,
    name: "Spartan ECDSA",
    title: "Elliptic Curve Anonymous Signature Aggregation",
    client: "Persona Labs",
    severity: "circom",
    methodology: "Multi-Expert Fellowship + Advanced Tooling",
    specialFeatures: ["8+ Expert Review", "Custom Vulnerability Detection", "Property-Based Testing"],
    category: "Signature Scheme"
  },
  {
    id: 3,
    name: "Summa Solvency Version A",
    title: "Proof of Solvency Protocol",
    client: "PSE",
    severity: "Halo2",
    methodology: "Collaborative Verification + Code Analysis",
    specialFeatures: ["Design Bug Detection", "End-to-End Security", "Zkvm Integration Testing"],
    category: "Financial Protocol"
  },
  {
    id: 4,
    name: "Summa Solvency Version B",
    title: "Proof of Solvency Protocol",
    client: "PSE",
    severity: "Halo2",
    methodology: "Fellowship-Powered Analysis",
    specialFeatures: ["Privacy Property Verification", "Anonymity Set Analysis", "Soundness Proofs"],
    category: "Governance",
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
      // case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      // case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      // case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
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
              </div>

              {/* Content */}
              <p className="text-sm text-gray-600 mb-4">{audit.title}</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-green-600 font-medium">{audit.client}</p>
                <div className="flex items-center gap-1">
                  <span className={`px-2 py-1 text-xs font-medium rounded border ${getSeverityColor(audit.severity)}`}>
                    {audit.severity}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 w-full">
                <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
                  View Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Audit View */}
        {selectedAudit !== null && (
          <div className="bg-white rounded-2xl p-8 mb-16 border border-green-200 shadow-lg">
            <div className="grid lg:grid-cols-1 justify-items-center gap-8">

              <div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  {boostedAudits[selectedAudit].name} - Detailed Analysis
                </h3>
                <p className="text-gray-600 text-center mb-6">{boostedAudits[selectedAudit].title}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-center text-gray-900 mb-2">Methodology:</h4>
                    <p className="text-green-600 text-center font-medium">{boostedAudits[selectedAudit].methodology}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-center text-gray-900 mb-2">Special Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {boostedAudits[selectedAudit].specialFeatures.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BoostedAuditsSection;