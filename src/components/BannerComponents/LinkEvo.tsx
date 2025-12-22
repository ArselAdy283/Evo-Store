"use client";
import Swal from "sweetalert2"
import "animate.css"

const LinkEvo = () => {
    const ip = "play.evopixel.xyz"

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(ip);

            Swal.fire({
                title: "IP address copied!",
                text: ip,
                icon: "success",
                showClass: {
                    popup: "animate__animated animate__bounceIn animate__faster"
                },
                hideClass: {
                    popup: "animate__animated animate__zoomOut animate__faster"
                },
                confirmButtonText: "Close"
            })

        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Failed to copy",
                text: "Please copy manually",
                showClass: {
                    popup: "animate__animated animate__bounceIn animate__faster"
                },
                hideClass: {
                    popup: "animate__animated animate__zoomOut animate__faster"
                },
                confirmButtonText: "Close"
            })
        }
    }

    return (
        <div className="flex flex-col items-center w-70 h-10">
            <button
                type="button"
                title="Click to copy IP"
                onClick={handleCopy}
                className="text-center text-white text-xl font-semibold px-4 py-2 bg-black/50 rounded-lg cursor-pointer"
            >
                <div className="text-white">Join 0 other players at</div>
                <div className="text-[#f39c12]">{ip}</div>
            </button>
        </div>
    )
}

export default LinkEvo
