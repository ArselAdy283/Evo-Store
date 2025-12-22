const EcoinsCard = ({ pkg }: any) => {
  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-5 flex flex-col items-center justify-between hover:scale-105 transition">
      <div className="text-[96px] leading-none mb-5">🪙</div>

      <div className="text-center">
        <p className="text-lg font-semibold text-blue-400">
          {pkg.amount} Coin
        </p>
        <p className="text-white mt-1">{pkg.price}</p>
      </div>

      <button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold hover:bg-blue-700 transition mt-5">
        Buy
      </button>
    </div>
  );
};

export default EcoinsCard;
