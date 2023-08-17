const Url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const billboardsCategories = async (id) => {
  const res = await fetch(`${Url}/${id}`);

  return await res.json();
};
export default billboardsCategories;
