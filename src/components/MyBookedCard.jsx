import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { LuCalendar, LuMapPin, LuTrash2, LuEye, LuCheck } from "react-icons/lu";

const MyBookedCard = ({ booked }) => {
    const { _id, imageUrl, departureDate, destinationName } = booked;
    const formatted = new Date(departureDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    return (
        <Card className="shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row">
                {/* Left Image Section */}
                <div className="relative md:w-2/6 h-auto">
                    <Image
                        src={imageUrl}
                        alt="Bali Paradise"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Airplane wing overlay effect */}
                    <div className="absolute bottom-6 left-4">
                        <div className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                            ✈️ Over {destinationName}
                        </div>
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="flex-1 p-6 flex justify-between items-end">
                    <div className="flex flex-col">
                        {/* Confirmed Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
                            <div className="w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center">
                                <LuCheck className="text-white" />
                            </div>
                            Confirmed
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-4">
                            {destinationName}
                        </h2>

                        {/* Details */}
                        <div className="mt-6 space-y-2">
                            <div className="flex items-center gap-3 text-gray-600">
                                <LuCalendar className="w-5 h-5 text-blue-600" />
                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                    Departure
                                </p>
                                <p className="font-semibold text-gray-900">
                                    {formatted}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600">
                                <LuMapPin className="w-5 h-5 text-amber-600" />

                                <p className="text-xs uppercase tracking-widest">
                                    Booking ID
                                </p>
                                <p className="font-semibold text-gray-900">
                                    {_id}
                                </p>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="mt-auto pt-4">
                            <p className="text-sm text-gray-500">Total Price</p>
                            <p className="text-4xl font-bold text-teal-600">
                                $1299
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center items-center gap-4">
                        <Button
                            variant="outline"
                            className="text-red-500 border-red-500 rounded-none"
                        >
                            <LuTrash2 className="w-5 h-5" />
                            Cancel
                        </Button>

                        <Button className="bg-[#15a1bf]  rounded-none">
                            <LuEye className="w-5 h-5" />
                            View
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default MyBookedCard;
