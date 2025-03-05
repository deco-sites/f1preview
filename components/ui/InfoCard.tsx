import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  image?: ImageWidget;
  name: string;
  position: number;
  points: number;
}

export default function InfoCard({ image, name, position, points }: Props) {
  return (
    <div className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
      <div className="relative w-16 h-16">
      {image && (
          <Image 
            src={image}
            alt={name}
            width={48}
            height={48}
            class="rounded-full"
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-foreground">{name}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Position: {position}</span>
          <span>Points: {points}</span>
        </div>
      </div>
    </div>  
  );
}