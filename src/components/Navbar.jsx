import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import User from "./User";
import Logout from "./Logout";

const Navbar = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;
    // console.log(user);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#ffffff]">
            <header className="relative flex h-16 items-center justify-between px-6">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/destinations">Destinations</Link>
                    </li>
                    <li>
                        <Link href="/my-bookings">My Bookings</Link>
                    </li>
                    <li>
                        <Link href="/add-destination">Add Destination</Link>
                    </li>
                </ul>
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Image
                        src="/assets/Wanderlast.png"
                        alt="Wanderlust"
                        width={200}
                        height={200}
                        loading="eager"
                    ></Image>
                </div>
                <ul className="flex items-center gap-4">
                    {user ? (
                        <>
                            <li className="flex gap-2 items-center">
                                <Link href="/profile">{user?.name}</Link>
                                <User user={user}></User>
                            </li>
                            <li>
                                <Logout></Logout>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/signup">Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </header>
        </nav>
    );
};

export default Navbar;
