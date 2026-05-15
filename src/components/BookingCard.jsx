"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const BookingCard = ({ destination }) => {
    const { data: session } = authClient.useSession();
    const { id, name, email, image } = session?.user || {};
    const [departureDate, setDepartureDate] = useState(null);
    const { _id, price, destinationName, imageUrl, country } = destination;
    // console.log(destination);

    const handleBooking = async () => {
        const bookingData = {
            userId: id,
            userName: name,
            userEmail: email,
            userImage: image,
            destinationId: _id,
            departureDate: new Date(departureDate),
            destinationName,
            price,
            imageUrl,
            country,
        };
        // console.log(bookingData);

        const res = await fetch("http://localhost:8000/my-bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        });

        const data = await res.json();
        if (data) {
            alert("Booking succeed");
        }
        // console.log(data);
    };
    // console.log(new Date(departureDate));
    // console.log(user);

    return (
        <Card className="border p-5 space-y-4">
            <div>
                <p>Starting from</p>
                <p className="text-xl font-bold text-cyan-800">💰 ${price}</p>
                <p>per person</p>
            </div>
            <form action={handleBooking}>
                <DateField
                    name="departureDate"
                    onChange={setDepartureDate}
                    isRequired
                >
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => (
                                <DateField.Segment segment={segment} />
                            )}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>

                <Button className="w-full rounded-none mt-4" type="submit">
                    Book Now <FaArrowRight />
                </Button>
            </form>
        </Card>
    );
};

export default BookingCard;
