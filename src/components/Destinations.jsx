import Image from "next/image";
import { ArrowUpRightFromSquare, Calendar, Globe } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";

const Destinations = ({ destination }) => {
    const { _id, destinationName, imageUrl, country, price, duration } =
        destination;

    return (
        <>
            {/* <div className="border rounded-xl p-4 shadow-md">
                <div className="relative w-full h-62.5">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                <h3 className="text-xl font-semibold mt-4">
                    {destinationName}
                </h3>
            </div> */}

            <div className="border rounded-xl overflow-hidden shadow-lg">
                <div className="relative w-full h-62.5">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4 space-y-2">
                    <p className="flex gap-1 items-center text-gray-600">
                        <Globe className="mb-1" />
                        {country}
                    </p>

                    <h3 className="text-2xl font-bold">{destinationName}</h3>

                    <div className="flex justify-between">
                        <span className="font-semibold">${price}</span>
                        <span className="flex gap-1 items-center">
                            <Calendar className="mb-1" /> {duration}
                        </span>
                    </div>
                    <Link href={`/destinations/${_id}`}>
                        <Button
                            variant="outline"
                            className="w-full text-cyan-500"
                        >
                            <ArrowUpRightFromSquare /> Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Destinations;
