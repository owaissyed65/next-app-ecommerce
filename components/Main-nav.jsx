"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = ({ data = [] }) => {
  const pathname = usePathname();
  
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          className={`text-sm font-medium transition-colors hover:text-black ${
            route.active ? "text-black" : "text-neutral-500"
          }`}
          href={route.href}
          key={route.href}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
