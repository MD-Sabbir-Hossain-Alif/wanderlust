import { Button } from "@heroui/react";
import Destinations from "./Destinations";
import Link from "next/link";

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/featured`);
    const featuredData = await res.json();
    // console.log(featuredData);
    return (
        <div className="mb-10">
            <div className="flex justify-between items-center my-10">
                <div>
                    <h2 className="text-4xl">Featured Destinations</h2>
                    <p>
                        Handpicked travel experiences for the adventure seekers
                    </p>
                </div>
                <Link href="/destinations">
                    <Button
                        variant="outline"
                        className="border-cyan-500 rounded-none"
                    >
                        All Destinations
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {featuredData.map((destination) => (
                    <Destinations
                        key={destination._id}
                        destination={destination}
                    ></Destinations>
                ))}
            </div>
        </div>
    );
};

export default Featured;
