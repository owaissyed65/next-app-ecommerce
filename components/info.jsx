import React from "react";
import Currency from "@/components/currency";
import Button from "@/components/ui/button";
import {} from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Info = ({ product }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-700 capitalize">
        {product.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency price={product.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4 ">
          <h3 className="font-semibold text-black">Size:</h3>
          <p>{product?.size?.name}</p>
        </div>
        <div className="flex items-center gap-x-4 ">
          <h3 className="font-semibold text-black">Color</h3>
          <p
            className="h-6 w-6 rounded-full border border-gray-600 "
            style={{ backgroundColor: product?.color?.value }}
          />
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button className="flex items-center gap-x-2">
            <AiOutlineShoppingCart /> Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
