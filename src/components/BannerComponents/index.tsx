import Image from "next/image"
import Link from "next/link"

const BannerComponent = () => {
    return (
        <div className="flex items-center justify-center h-50">
            <Link href="/">
                <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={300}
                    height={300}
                />
            </Link>
        </div>
    )
}

export default BannerComponent