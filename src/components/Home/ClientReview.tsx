import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import HyperText from "../ui/hyper-text";
import Image from "next/image";

const reviews = [
  {
    name: "Alex Carter",
    username: "@alexcarter",
    body: "This product completely exceeded my expectations. Highly recommend it!",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "Samantha Blake",
    username: "@samanthablake",
    body: "Absolutely fantastic! The quality is top-notch, and the experience was seamless.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Michael Reed",
    username: "@michaelreed",
    body: "I've tried many alternatives, but this one stands out in every way. Amazing!",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
  },
  {
    name: "Emily Johnson",
    username: "@emilyjohnson",
    body: "Truly a game-changer. I can't imagine going back to how things were before.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.2] hover:bg-gray-950/[.09]"
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/60">{body}</blockquote>
    </figure>
  );
};

export function ClientReview() {
  return (
    <div className="relative flex lg:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
         <div className="flex items-center justify-center">
          <HyperText
            className="lg:text-6xl text-2xl font-bold text-slate-300 my-16"
            text="Reviews_"
          />
        </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
