"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import HyperText from "@/components/ui/hyper-text";

import AvatarCircles from "@/components/ui/avatar-circles";

interface Item {
  name: string;
  description: string;
  link?: string;
  avatars: { imageUrl: string; profileUrl: string }[];
}

let notifications = [
  {
    name: "Security notes on ERC4337 and smart wallets",
    description: "An analysis of the security aspects of Account Abstraction",
    link: "https://blog.electisec.com/blogs/2024-09-09-security-notes-erc4337",
    avatars: [
      {
        imageUrl:
          "https://pbs.twimg.com/profile_images/1823720862916206592/bbWgqgyj_400x400.jpg",
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
        imageUrl:
          "https://pbs.twimg.com/profile_images/1292574472155930627/wOOf37Rc_400x400.jpg",
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
        imageUrl:
          "https://pbs.twimg.com/profile_images/1292574472155930627/wOOf37Rc_400x400.jpg",
        profileUrl: "https://twitter.com/bl4ckb1rd71",
      },
    ],
  },
  {
    name: "Proxies Research",
    description: "Proxies Deep Dive for auditors",
    link: "https://blog.electisec.com/proxies/",
    avatars: [
      {
        imageUrl:
          "https://pbs.twimg.com/profile_images/1292574472155930627/wOOf37Rc_400x400.jpg",
        profileUrl: "https://twitter.com/bl4ckb1rd71",
      },
      {
        imageUrl:
          "https://pbs.twimg.com/profile_images/1581745674260869120/aBYE6lat_400x400.jpg",
        profileUrl: "https://twitter.com/devtooligan",
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
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
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

export function AnimatedListDemo({ className }: { className?: string }) {
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

export default function Research() {
  return (
    <div className="h-full grid lg:grid-cols-2 my-12 sm:mx-6 md:mx-6 lg:mx-[20vw]">
      <div className="col-span-1 mr-10 sm:mr-0 sm:flex sm:flex-col w-full overflow-hidden">
        <HyperText
          className="lg:text-4xl text-3xl font-bold sm:text-center"
          text="Research"
        />
        <AnimatedListDemo className="mt-8 md:hidden lg:hidden" />
        <p className="text-zinc-500 mb-8 sm:text-justify">
          <br />
          We dig, that&apos;s what we do - always.
          <br />
        </p>
        <a target="_blank" href="https://blog.electisec.com/">
          <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
            Technical Blog Posts
          </button>
        </a>
      </div>
      <div className="lg:col-span-1">
        <AnimatedListDemo className="sm:hidden" />
      </div>
    </div>
  );
}
