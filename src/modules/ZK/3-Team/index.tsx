import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, Award, Code, Shield, Zap, Brain, Target, Users, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "teddav",
    role: "Halo2, Noir, ZKVM, MCP",
    tagline: "The Circuit Whisperer",
    avatar: "https://avatars.githubusercontent.com/teddav",
    specializations: ["Halo2", "Circuit Analysis", "Soundness Proofs", "Formal Verification"],
    expertise: "Expert",
    bugsFound: 127,
    projectsLed: 23,
    yearsExperience: 4,
    detailedWork: "Discovered critical vulnerability in Halo2's constraint system with just 20 lines of code. Led formal verification of zkWasm instructions, pioneered underconstrained circuit detection methodologies, and developed halo2-starter for minimal security PoCs. Authored Binius blog series and contributed advanced cryptographic tooling in sagemath.",
    achievements: [
      "Discovered Halo2 critical soundness error",
      "Top fellow in Electi’s 2nd ZK Security fellowship",
      "Authored 15+ ZK security research papers",
      "Finished first in Epoch 0 Secureum"
    ],
    currentWork: "Leading automated circuit verification research and advancing next-gen ZK security tooling.",
    social: {
      github: "https://github.com/teddav",
      x: "https://x.com/teddav"
    },
    recentContributions: [
      "halo2-starter and Mock Prover API extensions",
      "Binius blog series (fields, RS, FRI, sumcheck, GKR)",
      "Noir zk-tenant & co-match projects"
    ]
  },
  {
    id: 2,
    name: "qpzm",
    role: "Compilers, Noir, ZKTLS",
    tagline: "The Math Magician",
    avatar: "https://avatars.githubusercontent.com/gp2m",
    specializations: ["zk-SNARKs", "Formal Verification", "Protocol Design", "Mathematical Proofs"],
    expertise: "Expert",
    bugsFound: 156,
    projectsLed: 31,
    yearsExperience: 6,
    detailedWork: "Placed top 10 in 8 audit contests and secured top findings in Electi’s zk fellowship audits. Strong in Noir development, EVM RWA integrations, and low-level hardware/compilers (Y86-64 project). Focused on formal verification frameworks, automated proofs, and protocol correctness in ZK systems.",
    achievements: [
      "Top 10 in Sherlock audit contests",
      "Formal verification of zkVMs",
      "PhD-level research and 20+ publications",
      "Ethereum Foundation grant recipient"
    ],
    currentWork: "Building automated formal verification pipelines and next-gen compilers for ZK ecosystems.",
    social: {
      github: "https://github.com/qpzm",
      x: "https://x.com/gp2m"
    },
    recentContributions: [
      "Noir semaphore.nr and WebProof SDK",
      "Genie zk-TLS on-ramp systems",
      "Aztec UltraHonk verifier research"
    ]
  },
  {
    id: 3,
    name: "Oba",
    role: "Post-Quantum Crypto, MPC, LLD",
    tagline: "Privacy Protocol Pioneer",
    avatar: "https://avatars.githubusercontent.com/oba",
    specializations: ["Multi-Party Computation", "SEAL Protocol", "Privacy Protocols", "Cryptographic Design"],
    expertise: "Expert",
    bugsFound: 89,
    projectsLed: 18,
    yearsExperience: 5,
    detailedWork: "Core contributor to Kakarot zkEVM and cairo-m, focused on elliptic curve cryptography, privacy protocols, and advanced EVM architectures. Led real-time data pipeline security and authored in-depth cryptographic analyses including RFC6979 vulnerability breakdowns. Electi resident and mentor on ZK security audits.",
    achievements: [
      "Core dev on Kakarot zkEVM & cairo-m",
      "Electi ZK Security resident and mentor",
      "Authored RFC6979 vulnerability analyses",
      "Led design of Mass-core-tetris AA wallet system"
    ],
    currentWork: "Developing hybrid zkVM architectures and building privacy-preserving tooling across Cairo and EVM ecosystems.",
    social: {
      github: "https://github.com/obatirou",
      x: "https://x.com/obatirou"
    },
    recentContributions: [
      "Kakarot EVM on Starknet",
      "HyVM fork in Huff",
      "SEAL911 vulnerability research and blogs"
    ]
  },
  {
    id: 4,
    name: "nullity",
    role: "Formal Verification, Cryptography, gnark, circom",
    tagline: "Virtual Machine Virtuoso",
    avatar: "https://avatars.githubusercontent.com/nullity",
    specializations: ["Binius", "zkVM Security", "Compiler Analysis", "Virtual Machine Design"],
    expertise: "Expert",
    bugsFound: 94,
    projectsLed: 19,
    yearsExperience: 4,
    detailedWork: "Expert in zkVM security and compiler analysis, led audits of multiple major zkVM systems. Specialized in virtual machine security models, protocol-level circuit correctness, and underconstrained circuit testing frameworks. Pioneering contributions to Binius protocol research and zkVM standards.",
    achievements: [
      "Led audits of 3 major zkVMs",
      "Discovered 25+ critical VM vulnerabilities",
      "Developed zkVM security testing frameworks",
      "Contributed to Binius protocol design"
    ],
    currentWork: "Advancing zkVM security standards and researching new proof systems like Binius for scalable ZK applications.",
    social: {
      github: "https://github.com/nullity",
      x: "https://x.com/nullity"
    },
    recentContributions: [
      "Binius protocol contributions",
      "zkVM compiler audits",
      "New testing frameworks for VM security"
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
    detailedWork: "Ethereum Foundation grant recipient specializing in ZK protocol standardization. Led Verifier Validator Registry proposals, contributed to Ethereum scaling roadmap, and developed frameworks for verifier integration. Deep expertise in GKR and Halo2 bridging research with protocol standards.",
    achievements: [
      "Ethereum Foundation grant recipient",
      "Led Verifier Validator Registry proposal",
      "Contributed to EIP standardization",
      "Designed Ethereum ZK verification standards"
    ],
    currentWork: "Driving standardized verification frameworks for Ethereum and cross-chain ZK systems.",
    social: {
      github: "https://github.com/nobita",
      x: "https://x.com/nobita"
    },
    recentContributions: [
      "Verifier Validator Registry draft and design",
      "Ethereum ZK standards",
      "Protocol integration proposals"
    ]
  }
];


function DreamTeamSection() {
  const [selectedMember, setSelectedMember] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isUserClicked, setIsUserClicked] = useState<boolean>(false);

  // Auto-cycle through team members
  useEffect(() => {
    if (!isHovered && !isUserClicked) {
      const interval = setInterval(() => {
        setSelectedMember(prev => (prev + 1) % teamMembers.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, isUserClicked]);

  const handleMemberHover = (index: number, hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setSelectedMember(index);
    }
  };

  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
    setIsUserClicked(true);
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
                  onClick={() => handleMemberClick(index)}
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
            Want to work with ZK experts?
          </h3>
          <div className="flex flex-row sm:flex-col gap-4 justify-center">
            <button 
              className="px-8 py-3 font-semibold rounded-xl text-darkgreen bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700"
              onClick={() => window.location.href = '/contact-us'}
            >
              Schedule Team Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamTeamSection;