/* eslint-disable @next/next/no-img-element */
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import image3 from "../../public/collage/image5.jpg";

const features = [
  {
    name: "image1",
    background: (
      <Image
        src={
          "https://utfs.io/f/qggsNLzkMu05PsCKCl8s7CJfXHqMjvNW5UhuS0rRKEpdF1xt"
        }
        alt="image1"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-2",
  },
  {
    name: "image2",
    background: (
      <Image
        src={
          "https://utfs.io/f/qggsNLzkMu05C1Eo6eJbsq4ZE8l5jyPVvAMNGdFYgLKakc7o"
        }
        alt="image2"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "image3",
    background: <Image src={image3} alt="image3" />,
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "image4",
    background: (
      <Image
        src={
          "https://utfs.io/f/qggsNLzkMu05jGNk0NHJqxFp1y2stROgiwW0SE8vTPInDcLj"
        }
        alt="image4"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />
    ),
    className:
      "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover",
  },
  {
    name: "image5",
    background: (
      <Image
        src={
          "https://utfs.io/f/qggsNLzkMu05P9sphDm8s7CJfXHqMjvNW5UhuS0rRKEpdF1x"
        }
        alt="image5"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function PhotoCollage() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
