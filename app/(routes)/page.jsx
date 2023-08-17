import billboardsCategories from "@/actions/billboards";
import fetchProducts from "@/actions/products";
import Billboards from "@/components/billboards";
import ProductLists from "@/components/product-lists";
import Wrapper from "@/components/ui/Wrapper";

export const revalidate = 0;

const HomePage = async () => {
  const data = await billboardsCategories(
    "e0db3d97-9862-42a9-b2c6-a70d2423cbe1"
  );
  const products = await fetchProducts({
    isFeatured: true,
  });

  return (
    <Wrapper className={"p-0"}>
      <div className="space-y-10 pb-10">
        <Billboards data={data} />
      </div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 ">
        <ProductLists title="Featured Products" items={products} />
      </div>
    </Wrapper>
  );
};

export default HomePage;
