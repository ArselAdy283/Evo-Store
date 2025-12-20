export default function PackageCard({ pkg }: any) {
  return (
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 hover:scale-105 transition">
      <h3 className="font-semibold">{pkg.name}</h3>
      <p className="text-blue-400 mt-1">{pkg.price}</p>

      <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold hover:bg-blue-700 transition">
        Buy
      </button>
    </div>
  );
}
