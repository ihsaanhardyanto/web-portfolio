import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
}: {
  name: string;
  className: string;
  background: ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      "aspect-h-9 group relative col-span-3 flex w-full flex-col justify-between overflow-hidden rounded-xl",
      className,
    )}
  >
    <div>{background}</div>
  </div>
);

export { BentoCard, BentoGrid };
