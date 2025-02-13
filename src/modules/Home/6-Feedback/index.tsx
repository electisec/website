import { cn } from "@/lib/utils";
import Marquee from "../../../components/ui/marquee";
import HyperText from "@/components/ui/hyper-text";

const reviews = [
  {
    name: "Manifold Finance",
    logo: "manifold.svg",
    body: "We would like to especially thank the team at @electisec for their audit which you can find here. We give them a 9/10. Logarithmic scale.",
  },
  {
    name: "Temple DAO",
    logo: "templedao.svg",
    body: "This process has been very good and far better than past experiences - so kudos to the team.",
  },
  {
    name: "Get Protocol",
    logo: "get-protocol.svg",
    body: "Amazing stuff, really pleased with it. Very solid work from yourself and the electisec troop.",
  },
  {
    name: "Curve Finance",
    logo: "curve.svg",
    body: "yAudit looked at our core infra in a very timely manner, made availabilities based on the urgency of our needs and helped deliver a very good audit of a codebase even though they were not the first external reviewers.",
  },
  {
    name: "Strike",
    logo: "strike.svg",
    body: "Great audit partners and overall experience from scoping to audits. yAudits is currently securing Strike's mainnet contracts as well as partners building on Strike's underlying tech.",
  },
  {
    name: "vfat",
    logo: "vfat.svg",
    body: "yAudit have been a pleasure to work with, digging deep into the codebase and discovering edge cases. Will be staying with them!",
  },
];

export default function Feedback() {
  return (
    <section className="bg-white m-6">
      <div className="lg:mx-[20vw]">
        <HyperText
          className="lg:text-4xl text-3xl font-bold mb-4 sm:text-center"
          text="Feedback"
        />
        <MarqueeDemo />
      </div>
    </section>
  );
}

const ReviewCard = ({
  logo,
  name,
  username,
  body,
}: {
  logo: string;
  name: string;
  username?: string | undefined;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          alt=""
          className="rounded-full"
          width="32"
          height="32"
          src={"./clients/" + logo}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
