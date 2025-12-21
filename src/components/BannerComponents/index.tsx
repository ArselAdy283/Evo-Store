import Image from "next/image"
import Link from "next/link"
import LinkEvo from "./LinkEvo"

const BannerComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Link href="/">
                <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={300}
                    height={300}
                />
            </Link>
            <div>
                <LinkEvo/>
            </div>
        </div>
    )
}

export default BannerComponent