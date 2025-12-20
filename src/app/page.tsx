import { categories, packages } from "@/src/data/store";
import CategoryCard from "@/src/components/CategoryCard";
import PackageCard from "@/src/components/PackageCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Our Store
          </h1>
          <p className="mt-4 text-emerald-100 max-w-xl mx-auto">
            Purchase ranks, items, and coins to enhance your gameplay
          </p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-black/30 hover:bg-black/40 transition">
            Browse Store
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-6">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
    </main>
  );
}
