import { AspectRatio } from "~/components/ui/aspect-ratio";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export type VideoProps = {
  videoId: string;
  title: string;
};

export default function Video({ videoId, title }: VideoProps) {
  return (
    <div className="w-screen bg-red-500 sm:w-full">
      <AspectRatio ratio={16 / 9}>
        <LiteYouTubeEmbed
          id={videoId}
          title={title}
          poster="maxresdefault"
          params="color=white"
        />
      </AspectRatio>
    </div>
  );
}
