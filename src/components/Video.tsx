import { AspectRatio } from "~/components/ui/aspect-ratio";
import YouTube from "react-youtube";

export type VideoProps = {
  videoId: string;
  autoplay?: boolean;
};

export default function Video({ videoId, autoplay = false }: VideoProps) {
  return (
    <div className="w-full bg-red-500">
      <AspectRatio ratio={16 / 9}>
        <YouTube
          videoId={videoId}
          className="h-full w-full object-cover"
          iframeClassName="h-full w-full object-cover"
          loading="lazy"
          opts={{
            playerVars: {
              color: "white",
              autoplay: autoplay ? 1 : 0,
              playlist: autoplay ? videoId : undefined,
              loop: autoplay ? 1 : 0,
            },
          }}
        />
      </AspectRatio>
    </div>
  );
}
