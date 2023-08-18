"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const GalleryTab = ({ image, setMyImage, myImage }) => {
  return (
    <div
      className="relative w-full h-full aspect-square rounded-xl "
      onClick={() => setMyImage(image)}
    >
      <Image
        fill
        src={image.url}
        alt="image"
        className="object-cover object-center rounded-md md:rounded-xl"
      />
      <div
        className={cn(
          "absolute w-full h-full ring-2 ring-offset-2 rounded-md md:rounded-xl",
          myImage?.url === image.url ? "ring-slate-700" : "ring-transparent"
        )}
      />
    </div>
  );
};

export default GalleryTab;
