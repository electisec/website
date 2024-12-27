"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import HyperText from "@/components/ui/hyper-text";

import AvatarCircles from "@/components/ui/avatar-circles";

const avatars = [
  {
    imageUrl:
      "https://pbs.twimg.com/profile_images/1516347654502072325/sSUEYvD7_400x400.jpg",
    profileUrl: "https://github.com/dillionverma",
  },
];

interface Item {
  name: string;
  description: string;
}

let notifications = [
  {
    name: "Binius : Hardware Accelerated SNARKs",
    description: "Blog Post",
  },
  {
    name: "Proxies Research",
    description: "",
  },
  {
    name: "year 2024",
    description: "I",
  },
  {
    name: "zblock1 & zblock2",
    description: "I",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div>
          <AvatarCircles avatarUrls={avatars} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[275px] w-full flex-col p-6 overflow-hidden",
        className
      )}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export default function Research() {
  return (
    <>
      <div className="h-full grid lg:grid-cols-2 grid-cols-1 my-16 md:my-16 sm:my-16 sm:mx-6 md:mx-6 lg:mx-48 ">
        <div className="cols-span-1 mr-10 sm:mr-0 sm:flex sm:flex-col">
          <HyperText
            className="lg:text-5xl text-3xl font-bold sm:text-center"
            text="Research"
          />
          <AnimatedListDemo className="mt-8 md:hidden lg:hidden" />
          <p className="text-zinc-500 mb-8 sm:text-justify">
            <br />
            We dig, that&apos;s what we do - always.
            <br />
          </p>
          <a target="_blank" href="https://blog.electisec.dev/">
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Technical Blog Posts
            </button>
          </a>
        </div>
        <AnimatedListDemo className="cols-span-1 sm:hidden" />
      </div>
    </>
  );
}
