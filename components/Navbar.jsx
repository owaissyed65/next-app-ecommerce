import React from "react";
import Link from "next/link";

import Wrapper from "@/components/ui/Wrapper";
import MainNav from "@/components/Main-nav";
import fetchCategories from "@/actions/categories";
import NavbarActions from "@/components/navbar-actions";


const Navbar = async () => {
  const categories = await fetchCategories();
  return (
    <nav className="border-b">
      <Wrapper>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link className="ml-4 lg:ml-0 flex gap-x-2" href="/">
            <p className="font-bold text-xl cursor-pointer"> BigOh</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
