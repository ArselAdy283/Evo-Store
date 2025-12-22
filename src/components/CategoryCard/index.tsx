"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryCard({ category }: any) {
  const pathname = usePathname();
  const href = `/${category.slug}`;
  const isActive = pathname === href;

  return (
    <Link href={href} className="block">
      <div
        className={`rounded-xl border px-4 py-3 transition
          ${
            isActive
              ? "border-blue-500 bg-zinc-900 hover:bg-zinc-800"
              : "border-zinc-800 bg-zinc-900 hover:border-blue-500 hover:bg-zinc-800"
          }`}
      >
        <h3 className="text-2xl font-medium">{category.name}</h3>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
