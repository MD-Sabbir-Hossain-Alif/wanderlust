import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="relative flex h-16 items-center justify-between px-6">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="home">Home</Link>
                    </li>
                    <li>
                        <Link href="destinations">Destinations</Link>
                    </li>
                    <li>
                        <Link href="destinations">My Bookings</Link>
                    </li>
                    <li>
                        <Link href="destinations">Admin</Link>
                    </li>
                </ul>
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Image
                        src="/assets/Wanderlast.png"
                        alt="Wanderlust"
                        width={200}
                        height={200}
                        className="w-auto h-auto"
                    ></Image>
                </div>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="#">Profile</Link>
                    </li>
                    <li>
                        <Link href="#">Login</Link>
                    </li>
                    <li>
                        <Link href="#">Sign Up</Link>
                    </li>
                </ul>
            </header>
        </nav>
    );
};

export default Navbar;
