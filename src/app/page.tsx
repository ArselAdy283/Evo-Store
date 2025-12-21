import { categories, packages } from "@/src/data/store";
import CategoryCard from "@/src/components/CategoryCard";
import PackageCard from "@/src/components/PackageCard";
import BannerComponent from "../components/BannerComponents";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-s-950 text-white">
      {/* Hero */}
      <section className="relative bg-hero h-100">
        <div className="relative z-10">
          <BannerComponent/>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-b from-transparent to-black/50 z-0" />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-2xl text-center font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl text-center font-bold mb-6">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  );
}
