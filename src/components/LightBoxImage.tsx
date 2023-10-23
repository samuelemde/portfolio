import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import Image, { type StaticImageData } from "next/image";
import { cn } from "~/lib/utils";

export type LightBoxProps = {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  renderAlt?: boolean;
  className?: string;
};

export default function LightBoxImage({
  src,
  alt,
  sizes,
  renderAlt = false,
  className = "",
}: LightBoxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("relative h-full w-full", className)}>
          <Image
            className={"!relative w-full cursor-pointer object-cover"}
            src={src}
            alt={alt}
            fill
            loading="lazy"
            sizes={sizes}
          />
          {renderAlt && <p className="p-2 text-center text-sm italic">{alt}</p>}
        </div>
      </DialogTrigger>
      <DialogContent className=" h-full min-w-full items-center justify-center">
        <DialogClose asChild>
          <button
            type="button"
            className="absolute right-0 top-0 z-50 h-full w-full cursor-default bg-none"
          />
        </DialogClose>
        <Image
          className="object-contain p-4"
          src={src}
          alt={alt}
          layout="fill"
          sizes={"100vw"}
        />
      </DialogContent>
    </Dialog>
  );
}
