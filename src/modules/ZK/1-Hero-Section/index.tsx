"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Trophy, Shield, Users, Star } from 'lucide-react';

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, start: number = 0): number {
  const [count, setCount] = useState<number>(start);
  
  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
}

// Enhanced Typewriter Component
function EnhancedTypewriter() {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  
  const words: string[] = ['proofs', 'code', 'cryptography'];
  const [wordIndex, setWordIndex] = useState<number>(0);
  
  useEffect(() => {
    const speed = isDeleting ? 50 : 150;
    const word = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < word.length) {
        setCurrentText(word.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(word.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, wordIndex]);
  
  return (
    <h1 className="lg:leading-normal lg:text-5xl md:text-3xl sm:text-3xl font-bold">
      Breaking your <br />
      <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
      <br />
      so no one else can
    </h1>
  );
}

// Authority Metrics Component
function AuthorityMetrics() {
  const tvlCount = useCountUp(2.1, 2000);
  const bugsCount = useCountUp(500, 2500);
  const alumniCount = useCountUp(200, 2200);
  
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
        <div className="text-2xl font-bold text-green-600">${tvlCount.toFixed(1)}B+</div>
        <div className="text-sm text-gray-600">TVL Secured</div>
      </div>
      <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
        <div className="text-2xl font-bold text-green-600">{bugsCount}+</div>
        <div className="text-sm text-gray-600">Bugs Found</div>
      </div>
      <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
        <div className="text-2xl font-bold text-green-600">{alumniCount}+</div>
        <div className="text-sm text-gray-600">Alumni</div>
      </div>
    </div>
  );
}

// Credential Badges Component
function CredentialBadges() {
  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center">
      <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
        <Trophy className="w-4 h-4" />
        Ethereum Foundation Grant
      </div>
      <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
        <Shield className="w-4 h-4" />
        200+ Fellowship Alumni
      </div>
      <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
        <Users className="w-4 h-4" />
        8 Cohorts Completed
      </div>
    </div>
  );
}

// Recent Achievement Ticker
function AchievementTicker() {
  const achievements: string[] = [
    "🔥 Critical Halo2 vulnerability discovered",
    "🏆 EF Research Grant awarded", 
    "⚡ 50+ bugs found in Q4 2024",
    "🚀 zkVM audit completed for major L2",
    "📊 $100M+ TVL secured this month"
  ];
  
  const [currentAchievement, setCurrentAchievement] = useState<number>(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [achievements.length]);
  
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg p-3 mb-6">
      <div className="flex items-center gap-2">
        <div className="flex">
          <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
          <Star className="w-4 h-4 text-yellow-500 animate-pulse" style={{animationDelay: '0.2s'}} />
          <Star className="w-4 h-4 text-yellow-500 animate-pulse" style={{animationDelay: '0.4s'}} />
        </div>
        <span className="text-sm font-medium text-gray-700 animate-fade-in">
          {achievements[currentAchievement]}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="h-full relative sm:my-8 lg:mx-[20vw] lg:mt-24 lg:mb-24">
      {/* Top Credential Badges - Full Width */}
      <CredentialBadges />
      
      <div className="flex flex-col lg:flex-row sm:text-center justify-between gap-12">
        {/* Left Content */}
        <div className="my-8 flex-1">
          {/* Main Heading with Enhanced Typewriter */}
          <EnhancedTypewriter />
          
          {/* Enhanced Subtitle */}
          <div className="my-6">
            <h2 className="text-xl sm:mx-4 text-gray-600 mb-4">
              The ZK Security Authority That Secured $2.1B+ in TVL
            </h2>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-row sm:flex-col gap-4 items-center justify-start sm:justify-center mb-8">
            <Link href="/contact-us">
              <button className="px-8 py-4 rounded-xl text-white font-bold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get a Boosted Audit
              </button>
            </Link>
            <Link href="/research">
              <button className="px-8 py-4 rounded-xl text-green-600 font-bold border-2 border-green-500 hover:bg-green-50 transition-all duration-300">
                View Our Research
              </button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Trusted by leading protocols:</p>
            <div className="flex flex-wrap gap-4 items-center justify-start sm:justify-center opacity-60">
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">RLN Protocol</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">Summa</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">ECASA</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">Sigma</div>
            </div>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center items-center sm:hidden lg:items-end">
          {/* Illustration */}
          <div className="mb-8">
            <img
              alt="ZK Security Hero Illustration"
              src="/illustrations/hero.svg"
              className="w-full h-auto max-h-[20rem] object-contain"
            />
          </div>
          
          {/* Achievement Ticker - Moved to Right */}
          <div className="w-full max-w-sm">
            <AchievementTicker />
          </div>
          
          {/* Authority Metrics - Moved to Right */}
          <div className="w-full max-w-md ml-auto">
            <AuthorityMetrics />
          </div>
        </div>
      </div>
      
      {/* Bottom Stats Summary */}
      <div className="mt-12 text-center sm:hidden">
        <p className="text-lg text-gray-500">
          Ethereum Foundation Grant Recipients • 8 Fellowship Cohorts • 500+ Critical Bugs Found
        </p>
      </div>
    </div>
  );
}