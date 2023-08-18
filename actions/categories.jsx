const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
const fetchCategories = async () => {
  const res = await fetch(Url, { next: { revalidate: 20 } });

  return await res.json();
};
export default fetchCategories;
