import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import EditModalBtn from "./EditModalBtn";
import DeleteAlertDialog from "./DeleteAlertDialog";
import BookingCard from "./BookingCard";

const DestinationDetails = async ({ destination }) => {
    const {
        destinationName,
        country,
        category,
        price,
        duration,
        departureDate,
        imageUrl,
        description,
    } = destination;

    return (
        <div className="max-w-5xl w-full mx-auto my-10">
            {/* button */}
            <div className="flex justify-between items-center mb-4">
                <Link href="/destinations">
                    <Button>Back to Destinations</Button>
                </Link>
                <div className="flex justify-between items-center gap-4">
                    <EditModalBtn destination={destination}></EditModalBtn>
                    <DeleteAlertDialog
                        variant="danger"
                        destination={destination}
                    ></DeleteAlertDialog>
                </div>
            </div>

            {/* image */}
            <div className="relative w-full h-120 rounded-xl overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    fill
                    className="object-cover"
                />
            </div>

            {/* content */}
            <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center">
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold">
                            {destinationName}
                        </h1>

                        <p className="text-gray-600 text-lg">
                            {country} • {category}
                        </p>

                        <div className="text-lg font-semibold">
                            <span>⏳ {duration}</span>
                        </div>
                    </div>
                    <div className="max-w-1/4 w-full">
                        <BookingCard destination={destination}></BookingCard>
                    </div>
                </div>

                <div>
                    <h4 className="text-3xl font-semibold">Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;
