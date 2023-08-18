"use client";
import React, { useState } from "react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

const Gallery = ({ images }) => {
  const [myImage, setMyImage] = useState(images[0]);
  return (
    <div className="flex flex-col-reverse w-full h-full gap-y-6 md:gap-y-8 ">
      <div className=" grid grid-cols-4 items-center gap-x-4 md:gap-x-8 cursor-pointer ">
        {images.map((image) => (
          <GalleryTab
            image={image}
            key={image.url}
            setMyImage={setMyImage}
            myImage={myImage}
          />
        ))}
      </div>
      <div className="flex items-center justify-center px-4 ">
        <div
          className={"aspect-square border relative overflow-hidden rounded-lg w-full"}
        >
          <Image
            fill
            src={myImage.url}
            alt="image"
            className="object-fit object-center rounded-lg md:object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
