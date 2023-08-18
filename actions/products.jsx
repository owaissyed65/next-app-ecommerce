import queryString from "query-string";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
const fetchProducts = async (query) => {
  const url = queryString.stringifyUrl({
    url: Url,
    query: {
      colorId: query?.colorId,
      sizeId: query?.sizeId,
      categoryId: query?.categoryId,
      isFeatured: query?.isFeatured,
    },
  });
  const res = await fetch(url, { next: { revalidate: 60 } });

  return await res.json();
};
export default fetchProducts;
