const LandingContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-blue-400">
        Welcome to EvoPixel Store
      </h2>

      <p className="text-zinc-300">
        EvoPixel Store adalah platform resmi untuk pembelian rank, coin,
        dan item premium server EvoPixel.
      </p>

      <p className="text-zinc-400">
        Pilih kategori di samping untuk melihat paket yang tersedia.
        Semua transaksi aman, cepat, dan otomatis masuk ke akun Minecraft kamu.
      </p>

      <ul className="list-disc pl-5 text-zinc-400 space-y-1">
        <li>⚡ Proses instan</li>
        <li>🔒 Pembayaran aman</li>
        <li>🎮 Terintegrasi dengan server</li>
      </ul>
    </div>
  );
};

export default LandingContent;
