"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Usermenu from "./Usermenu";
import Logo from "./Logo";
import Search from "./Search";
import { SearchIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

interface NavbarProps {
    isExplore?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
    isExplore = false
}) => {
    return (
        <div className="flex w-full sm:h-24 h-16 sm:shadow-lg shadow-sm light:fixed z-10 light:bg-white  justify-between">
            <div className="dark:hidden max-sm:hidden">
                <Logo />
            </div>
            <div className="dark:block hidden max-sm:hidden">
                <div>
                    <Image
                        src="/images/logo2.png"
                        alt="logo"
                        className="px-2 my-auto"
                        width={250}
                        height={250}
                    />
                </div>
            </div>
            <div className="sm:hidden">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    className="px-2 my-auto"
                    width={175}
                    height={175}
                />
            </div>
            <div className="flex max-sm:hidden  gap-6 my-auto mr-8">
                {
                    !isExplore ? (
                        <>
                            <ModeToggle />
                            <Button variant={"secondary"}>
                                Explore
                            </Button>
                        </>
                    ) : (
                        <>
                            <div className="relative md:mx-auto">
                                <SearchIcon className="absolute top-0 left-0 ml-3 mt-3 text-gray-500" />
                                <input
                                    type="text"
                                    className="pl-10 pr-4 lg:mr-40 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                    style={{ width: '300px' }}
                                    placeholder="Search..."
                                />
                            </div>
                        </>
                    )
                }
                {/* <Button variant={"primary"}>
                    SignUp
                </Button> */}
            </div>
            <div className="sm:hidden">
                <Usermenu />
            </div>
        </div>

    )
}

export default Navbar