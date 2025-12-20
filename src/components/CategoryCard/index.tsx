export default function CategoryCard({ category }: any) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-emerald-500 transition">
      <h3 className="text-lg font-semibold">
        {category.name}
      </h3>
      <p className="mt-2 text-sm text-zinc-400">
        {category.description}
      </p>
    </div>
  );
}
