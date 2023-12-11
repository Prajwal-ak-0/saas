"use client";

import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image
                src="/images/logo.png"
                alt="logo"
                className="px-2 my-auto"
                width={250}
                height={250}
            />
        </div>
    )
}

export default Logo