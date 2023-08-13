import Link from "next/link";

import fetchCategories from "@/actions/categories";


const HomePage = async () => {
  const data = await fetchCategories();
  return (
    <div>
      HomePage
      {data.map((val) => (
        <Link href={val.name} key={val.id}>
          <div>{val.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
