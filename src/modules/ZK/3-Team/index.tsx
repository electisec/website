import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, Award, Code, Shield, Zap, Brain, Target, Users, ChevronRight } from 'lucide-react';

// Team members data with detailed work
const teamMembers = [
  {
    id: 1,
    name: "teddav",
    role: "Halo2, Noirn, ZKVM, MCP",
    tagline: "The Circuit Whisperer",
    avatar: "https://avatars.githubusercontent.com/teddav",
    specializations: ["Halo2", "Circuit Analysis", "Soundness Proofs", "Formal Verification"],
    expertise: "Expert",
    bugsFound: 127,
    projectsLed: 23,
    yearsExperience: 4,
    detailedWork: "Discovered critical vulnerability in Halo2's constraint system with just 20 lines of code. Led the formal verification of zkWasm instructions and pioneered underconstrained circuit detection methodologies. Expert in mathematical proofs of circuit correctness with 50+ critical bugs found across major ZK protocols.",
    achievements: [
      "Discovered Halo2 critical soundness error",
      "Led formal verification of zkWasm",
      "Authored 15+ ZK security research papers", 
      "Speaker at 8 major ZK conferences"
    ],
    currentWork: "Leading research on automated circuit verification and developing next-generation ZK security tools.",
    social: {
      github: "https://github.com/teddav",
      x: "https://x.com/teddav"
    },
    recentContributions: [
      "Binius field extensions research",
      "Reed-Solomon codes implementation",
      "FRI protocol analysis"
    ]
  },
  {
    id: 2,
    name: "Oba",
    role: "Post-Quantum Crypto, MPC, LLD",
    tagline: "Privacy Protocol Pioneer",
    avatar: "https://avatars.githubusercontent.com/oba",
    specializations: ["Multi-Party Computation", "SEAL Protocol", "Privacy Protocols", "Cryptographic Design"],
    expertise: "Expert",
    bugsFound: 89,
    projectsLed: 18,
    yearsExperience: 5,
    detailedWork: "Leading researcher in MPC protocols with focus on privacy-preserving computation. Audited 15+ privacy-preserving systems and discovered novel attack vectors in multi-party computation schemes. Specializes in information leakage prevention and secure protocol design.",
    achievements: [
      "40% performance improvement in MPC protocols",
      "Designed privacy-preserving audit framework",
      "Published 12 research papers on MPC security",
      "Led security reviews for 3 major privacy coins"
    ],
    currentWork: "Developing next-generation MPC protocols with enhanced privacy guarantees and improved performance.",
    social: {
      github: "https://github.com/oba",
      x: "https://x.com/oba"
    },
    recentContributions: [
      "MPC protocol optimization research",
      "SEAL protocol security analysis",
      "Privacy-preserving computation frameworks"
    ]
  },
  {
    id: 3,
    name: "qpzm", 
    role: "Compilers, Noir, ZKTLS",
    tagline: "The Math Magician",
    avatar: "https://avatars.githubusercontent.com/gp2m",
    specializations: ["zk-SNARKs", "Formal Verification", "Protocol Design", "Mathematical Proofs"],
    expertise: "Expert",
    bugsFound: 156,
    projectsLed: 31,
    yearsExperience: 6,
    detailedWork: "PhD in Applied Cryptography specializing in formal verification of ZK protocols. Developed mathematical frameworks for proving circuit correctness and led the verification of multiple zkVM implementations. Expert in cryptographic protocol design with 20+ research publications.",
    achievements: [
      "PhD in Applied Cryptography",
      "20+ peer-reviewed research publications",
      "Formal verification of 5 major zkVM systems",
      "Ethereum Foundation research grant recipient"
    ],
    currentWork: "Advancing formal verification methodologies for complex ZK systems and developing automated proof generation tools.",
    social: {
      github: "https://github.com/gp2m",
      x: "https://x.com/gp2m"
    },
    recentContributions: [
      "zkVM formal verification frameworks",
      "Automated proof generation tools",
      "Cryptographic protocol security models"
    ]
  },
  {
    id: 4,
    name: "nullity",
    role: "Formal Verification, cryptography, gnark, circom",
    tagline: "Virtual Machine Virtuoso", 
    avatar: "https://avatars.githubusercontent.com/nullity",
    specializations: ["Binius", "zkVM Security", "Compiler Analysis", "Virtual Machine Design"],
    expertise: "Expert",
    bugsFound: 94,
    projectsLed: 19,
    yearsExperience: 4,
    detailedWork: "Expert in virtual machine security for ZK systems with deep focus on zkVM implementations. Led comprehensive audits of 3 major zkVM systems and discovered 25+ critical vulnerabilities in virtual machine designs. Specializes in compiler security and execution environment analysis.",
    achievements: [
      "Led audits of 3 major zkVM implementations",
      "Discovered 25+ critical VM vulnerabilities",
      "Developed zkVM security testing frameworks",
      "Contributed to Binius protocol research"
    ],
    currentWork: "Researching novel proof systems like Binius and developing security standards for next-generation zkVMs.",
    social: {
      github: "https://github.com/nullity", 
      x: "https://x.com/nullity"
    },
    recentContributions: [
      "Binius protocol implementation",
      "zkVM compiler security analysis",
      "Virtual machine testing frameworks"
    ]
  },
  {
    id: 5,
    name: "Flying Nobita",
    role: "GKR, Halo2",
    tagline: "Protocol Standardization Sage",
    avatar: "https://avatars.githubusercontent.com/nobita",
    specializations: ["EF Research", "Protocol Standards", "Verification Systems", "Ethereum Integration"],
    expertise: "Research",
    bugsFound: 67,
    projectsLed: 14,
    yearsExperience: 3,
    detailedWork: "Ethereum Foundation grant recipient focusing on ZK protocol standardization and verification system design. Led the development of verifier validator registry proposals and contributed to Ethereum's ZK scaling roadmap. Expert in protocol integration and standards development.",
    achievements: [
      "Ethereum Foundation grant recipient",
      "Led Verifier Validator Registry proposal",
      "Contributed to EIP standardization process",
      "Designed ZK verification standards"
    ],
    currentWork: "Developing standardized frameworks for ZK verifier validation across the Ethereum ecosystem.",
    social: {
      github: "https://github.com/nobita",
      x: "https://x.com/nobita"
    },
    recentContributions: [
      "Verifier validator registry design",
      "Ethereum ZK standards development",
      "Protocol integration frameworks"
    ]
  }
];

function DreamTeamSection() {
  const [selectedMember, setSelectedMember] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-cycle through team members
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setSelectedMember(prev => (prev + 1) % teamMembers.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMemberHover = (index: number, hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setSelectedMember(index);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the Dream ZK Team
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            ZK Circuit breakers, MPC Specialists, FHE experts, TEE geeks, seasoned Rustaceans and Cryptography connoisseurs
          </p>
          <p className="text-lg text-green-600 font-medium">
            The minds behind 500+ critical bug discoveries and $2.1B+ TVL secured
          </p>
        </div>

        {/* Team Grid + Detailed View */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Team Member Cards */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-500 cursor-pointer ${
                    selectedMember === index
                      ? 'border-green-500 bg-green-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                  }`}
                  onMouseEnter={() => handleMemberHover(index, true)}
                  onMouseLeave={() => handleMemberHover(index, false)}
                  onClick={() => setSelectedMember(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full border-2 border-gray-200"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-1">
                        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>

                      </div>
                      <p className="text-sm text-gray-600 mb-1">{member.role}</p>
                      <p className="text-xs text-green-600 font-medium italic">{member.tagline}</p>
                    </div>

                    <ChevronRight className={`w-5 h-5 text-green-500 transition-transform ${
                      selectedMember === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detailed Member View */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              {selectedMember !== null && (
                <div>
                  {/* Header */}
                  <div className="flex sm:flex-col sm:justify-center sm:text-center sm:items-center items-start gap-6 mb-8">
                    <img
                      src={teamMembers[selectedMember].avatar}
                      alt={teamMembers[selectedMember].name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {teamMembers[selectedMember].name}
                      </h3>
                      <p className="text-xl text-green-600 font-medium mb-2">
                        {teamMembers[selectedMember].role}
                      </p>
                      <p className="text-lg text-gray-600 italic mb-4">
                        "{teamMembers[selectedMember].tagline}"
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex sm:justify-center sm:items-center gap-3">
                        <a
                          href={teamMembers[selectedMember].social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="/icons/github.png" alt="GitHub" className="w-8 h-8" />
                        </a>
                        <a
                          href={teamMembers[selectedMember].social.x}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Work */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Detailed Work:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {teamMembers[selectedMember].detailedWork}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Current Focus:</strong> {teamMembers[selectedMember].currentWork}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers[selectedMember].specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium border border-green-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {teamMembers[selectedMember].achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Contributions */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Recent Contributions:</h4>
                    <div className="grid lg:grid-cols-3 gap-3">
                      {teamMembers[selectedMember].recentContributions.map((contribution, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-green-200">
                          <Zap className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{contribution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to work with these experts?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Get your protocol audited by the dream team that's secured $2.1B+ TVL
          </p>
          <div className="flex flex-row sm:flex-col gap-4 justify-center">
            <button className="px-8 py-3 font-semibold rounded-xl text-darkgreen bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Schedule Team Consultation
            </button>
            <button className="px-8 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors">
              Read Full Team Bios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamTeamSection;