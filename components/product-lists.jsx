import React from "react";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import NoResults from "@/components/ui/no-results";
import ProductCards from "@/components/ui/product-cards";
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });
const ProductLists = ({ title, items = [], className = "" }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className={cn("font-bold text-3xl", montserrat.className)}>
        {title}
      </h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4">
        {items?.map((item) => (
          <ProductCards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
