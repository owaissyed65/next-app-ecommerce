const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
const fetchProduct = async (id) => {
  const res = await fetch(`${Url}/${id}`, { next: { revalidate: 60 } });

  return await res.json();
};
export default fetchProduct;
