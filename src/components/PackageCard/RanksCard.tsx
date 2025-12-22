const RanksCard = ({ pkg }: any) => {
  return (
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 hover:scale-105 transition">
      <h3 className={`font-minecraft text-2xl font-semibold ${pkg.titleColor ?? "text-white"}`}>
        {pkg.name}
      </h3>

      <p className="text-white mt-1">{pkg.price}</p>

      <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold hover:bg-blue-700 transition">
        Buy
      </button>
    </div>
  );
}

export default RanksCard
