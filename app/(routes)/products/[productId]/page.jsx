import fetchProduct from "@/actions/product";
import fetchProducts from "@/actions/products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductLists from "@/components/product-lists";
import React from "react";

const ProductIdPage = async ({ params }) => {
  const product = await fetchProduct(params.productId);
  const suggestedProducts = await fetchProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 ">
          {/* gallery */}
          <Gallery images={product?.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info product={product} />
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <ProductLists
        title={"Related Products"}
        items={suggestedProducts}
        className="px-8 mb-8"
      />
    </div>
  );
};

export default ProductIdPage;
