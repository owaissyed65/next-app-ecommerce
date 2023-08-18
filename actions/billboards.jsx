const Url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const fetchbillboards = async (id) => {
  const res = await fetch(`${Url}/${id}`, { next: { revalidate: 30 } });

  return await res.json();
};
export default fetchbillboards;
