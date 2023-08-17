"use client";

import { useState, useEffect } from "react";

import Button from "@/components/ui/button";
import { BiShoppingBag } from "react-icons/bi";
const NavbarActions = () => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className=" ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2 gap-2">
        <BiShoppingBag size={20} color="white" />
        <span className="text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
