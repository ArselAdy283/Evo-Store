"use client";

import { categories, Ranks, Ecoins } from "@/src/data/store";
import RanksCard from "@/src/components/PackageCard/RanksCard";
import EcoinsCard from "@/src/components/PackageCard/EcoinsCard";

const Content = ({ category }: { category?: string }) => {

    if (!category) {
        return (
            <div className="text-zinc-300 space-y-4">
                <h2 className="text-2xl font-bold text-blue-400">
                    Welcome to EvoPixel Store
                </h2>
                <p>
                    Pilih kategori di samping untuk melihat produk yang tersedia.
                </p>
            </div>
        );
    }

    const currentCategory = categories.find(
        (cat) => cat.slug === category
    );

    if (!currentCategory) {
        return <p className="text-zinc-400">Category not found.</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center md:text-left">
                {currentCategory.name}
            </h2>

            {/* RANKS */}
            {category === "ranks" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Ranks.map(pkg => (
                        <RanksCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            )}

            {/* COINS */}
            {category === "ecoins" && (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {Ecoins.map((pkg) => (
                        <EcoinsCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

            )}
        </div>
    );
};

export default Content;
