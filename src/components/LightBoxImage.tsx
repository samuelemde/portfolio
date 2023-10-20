import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import Image from "next/image";

export type LightBoxProps = {
  src: string;
  alt: string;
  sizes: string;
  renderAlt?: boolean;
};

export default function LightBoxImage({
  src,
  alt,
  sizes,
  renderAlt = false,
}: LightBoxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative h-full w-full">
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
