import Content from "@/src/components/Content";
import { categories } from "@/src/data/store";
import CategoryCard from "@/src/components/CategoryCard";
import BannerComponent from "@/src/components/BannerComponents";
import Footer from "@/src/components/Footer";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params; // 🔥 WAJIB

  return (
    <main className="min-h-screen bg-s-950 text-white">
      {/* Banner */}
      <section className="relative bg-hero h-100">
        <div className="relative z-10">
          <BannerComponent />
        </div>
        <div className="absolute inset-0 bg-black/50 z-0" />
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">

          {/* Sidebar */}
          <aside className="space-y-3">
            <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center md:text-left">
              Categories
            </h2>

            {categories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </aside>

          {/* ⬅️ SEKARANG AMAN */}
          <Content category={category} />

        </div>
      </section>

      <Footer />
    </main>
  );
}
