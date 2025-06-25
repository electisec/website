import React from 'react';
import { ExternalLink, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import HyperText from "@/components/ui/hyper-text";
import AvatarCircles from "@/components/ui/avatar-circles";

// Blog data and components from your existing Research component
interface Item {
  name: string;
  description: string;
  link?: string;
  avatars: { imageUrl: string; profileUrl: string }[];
}

let notifications = [
  {
    name: "From 0 to Bi(ge)nius: field extensions",
    description: "𝔽₂ and Beyond: A Gentle Guide to Field Extensions",
    link: "https://blog.electisec.com/binius-1-extension-fields",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "Reed-Solomon Codes: The Math Behind Error Correction and Zero-Knowledge Proofs",
    description: "From QR codes to ZK, discover how Reed-Solomon codes correct errors and secure digital communication",
    link: "https://blog.electisec.com/reed-solomon",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "FRI: Folding Polynomials and Catching Cheaters",
    description: "Folding and Merkle trees, understand the magic behind STARKs",
    link: "https://blog.electisec.com/fri",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "Sum-Check: The Backbone of ZK Proofs",
    description: "Compressing Computation One Bit at a Time",
    link: "https://blog.electisec.com/sumcheck",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/teddav",
        profileUrl: "https://github.com/teddav",
      }]
  },
  {
    name: "Security notes on ERC4337 and smart wallets",
    description: "An analysis of the security aspects of Account Abstraction",
    link: "https://blog.electisec.com/blogs/2024-09-09-security-notes-erc4337",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/romeroadrian",
        profileUrl: "https://twitter.com/adrianromero",
      },
    ],
  },
  {
    name: "When L2s Fall",
    description: "Newsflash - single points of failure can fail",
    link: "https://blog.electisec.com/blogs/2024-08-19-when-L2s-fall",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/engn33r",
        profileUrl: "https://twitter.com/bl4ckb1rd71",
      },
    ],
  },
  {
    name: "Are Inverse TWAP Prices Inaccurate",
    description: "Price Data is Hard - Part 1",
    link: "https://blog.electisec.com/blogs/2024-05-24-are-inverse-TWAP-prices-inaccurate",
    avatars: [
      {
        imageUrl: "https://avatars.githubusercontent.com/engn33r",
        profileUrl: "https://twitter.com/bl4ckb1rd71",
      },
    ],
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, link, avatars }: Item) => {
  return (
    <figure
      className={cn(
        "w-full min-h-fit cursor-pointer overflow-hidden rounded-2xl p-4 mx-auto",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3 w-full">
        <div className="flex-shrink-0">
          <AvatarCircles avatarUrls={avatars} />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg truncate">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[275px] flex-col p-6 overflow-hidden w-full max-w-full",
        className
      )}
    >
      <AnimatedList delay={2000} className="w-full">
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

// Featured Research Highlight Component
function FeaturedResearchHighlight() {
  return (
    <div className="bg-gray-50 rounded-3xl border border-green-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden">
      {/* Hero Banner Image */}
      <div className="relative sm:h-[24rem] h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src="/mpc.jpg" 
          alt="Multi Party Computation Research" 
          className="w-full h-full object-cover sm:object-right"
        />
        {/* Featured Badge Overlay */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-white/90 text-green-700 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
            ⭐ Featured Research
          </span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Latest
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Main Content */}
        <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Multi Party Computation{' '}
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Research
          </span>
        </h1>

        {/* CTA Section */}
        <div className="flex flex-row sm:flex-col gap-4">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors transform duration-200">
            Read Full Research
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors">
            View Technical Paper
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Click to View Indicator */}
        <div className="mt-6 flex items-center gap-2 text-green-600 text-sm font-medium opacity-70">
          <span>Click to view</span>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

// Blog Section Component (adapted from your Research component)
function BlogSection() {
  return (
    <div className="h-full">
      <div className="flex flex-col w-full overflow-hidden">
        <HyperText
          className="lg:text-4xl text-3xl font-bold text-center lg:text-left mb-4"
          text="Research"
        />
        
        <div className="lg:hidden mb-6">
          <AnimatedListDemo />
        </div>
        
        <p className="text-zinc-500 mb-8 text-center lg:text-left">
          We dig, that&apos;s what we do - always.
        </p>
        
        <a target="_blank" href="https://blog.electisec.com/" className="w-full lg:w-auto">
          <button className="px-8 py-3 w-full lg:w-auto rounded-xl text-md text-green-600 font-bold bg-green-100 bg-opacity-25 hover:bg-opacity-50 hover:text-green-700 duration-700">
            Technical Blog Posts
          </button>
        </a>
      </div>
      
      <div className="hidden lg:block mt-8">
        <AnimatedListDemo />
      </div>
    </div>
  );
}

export default function ResearchSection() {
  return (
    <div className="bg-[#E8FFF8]">
      <div className="lg:my-12 p-12 lg:px-64">
        <div className="grid sm:grid-cols-1 grid-cols-2 gap-12 items-start">
          {/* Left Side - Featured Research Highlight */}
          <div>
            <FeaturedResearchHighlight />
          </div>
          
          {/* Right Side - Blog Section with AnimatedList */}
          <div>
            <BlogSection />
          </div>
        </div>
      </div>
    </div>
  );
}