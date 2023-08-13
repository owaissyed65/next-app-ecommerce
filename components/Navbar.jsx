import React from "react";
import Wrapper from "@/components/ui/Wrapper";
import Link from "next/link";
import MainNav from "@/components/Main-nav";
import fetchCategories from "@/actions/categories";



const Navbar = async () => {
  const categories = await fetchCategories();
  return (
    <nav className="border-b">
      <Wrapper>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link className="ml-4 lg:ml-0 flex gap-x-2" href="/">
            <p className="font-bold text-xl"> BigOh</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
