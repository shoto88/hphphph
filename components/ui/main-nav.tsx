import { NavItem } from "@/types";
import Link from "next/link";

interface MainNavProps {
    items: NavItem[];
  }
export default function MainNav({ items }: MainNavProps) {
    return (
      <div>
      <nav className="flex justify-around bg-gray-100 p-2">
      {items.map((item, index) => (
        <Link key={index} href={item.href} className="block">
          {item.title}
        </Link>
        ))}
      </nav>
      </div>
    );
  }