"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { menuItems } from "@/lib/helper";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 fixed bg-white shadow-sm min-h-screen hidden md:block">
      <nav className="space-y-1 mt-10">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-6 py-3 hover:bg-blue-50",
                active && "bg-blue-500 text-white hover:bg-blue-500"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
