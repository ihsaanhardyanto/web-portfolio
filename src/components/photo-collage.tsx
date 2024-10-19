/* eslint-disable @next/next/no-img-element */
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    name: "image1",
    background: (
      <img
        src="/collage/image3.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt="image1"
      />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-2",
  },
  {
    name: "image2",
    background: (
      <img
        src="/collage/image4.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt="image1"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "image3",
    background: (
      <img
        src="/collage/image5.jpg"
        className="flex items-center justify-center"
        alt="image1"
      />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "image4",
    background: (
      <img
        src="/collage/image2.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt="image1"
      />
    ),
    className:
      "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover",
  },
  {
    name: "image5",
    background: (
      <img
        src="/collage/image1.jpg"
        className="absolute inset-0 h-full w-full object-cover "
        alt="image1"
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
