"use client";

import Image from "next/image";
import React from "react";
import IconButton from "./icon-button";
import { GiExpand } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "@/lib/utils";
const ProductCards = ({ item }) => {
  return (
    <div className="group bg-white border p-3 space-y-4 rounded-xl cursor-pointer">
      <div className="aspect-square relative rounded-xl bg-gray-100">
        <Image
          src={item?.images?.[0]?.url}
          fill
          alt="Images"
          className="object-cover rounded-xl aspect-square"
        />
        <div className="opacity-0 bottom-0 group-hover:opacity-100 absolute group-hover:bottom-8 w-full px-6 transition-all duration-200">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<GiExpand className={"text-gray-600"} />}
              onClick={() => {}}
            />
            <IconButton
              icon={<AiOutlineShoppingCart className={"text-gray-600"} />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      {/* descriptions */}
      <div className="flex justify-center flex-col  gap-y-2 px-1">
        <p className="font-semibold text-gray-500">{item?.name}</p>
        <p className="text-sm text-gray-500">{item?.category?.name}</p>
      </div>
      <div className="flex items-center px-1 font-semibold">
        {formatter.format(item?.price)}
      </div>
    </div>
  );
};

export default ProductCards;
