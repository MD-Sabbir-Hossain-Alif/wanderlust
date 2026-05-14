"use client";

import {
    Button,
    Card,
    FieldError,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const BookingCard = ({ destination }) => {
    const [departureDate, setDepartureDate] = useState(null);
    const { price } = destination;

    console.log(departureDate);

    return (
        <Card className="border p-5 space-y-4">
            <div>
                <p>Starting from</p>
                <p className="text-xl font-bold text-cyan-800">💰 ${price}</p>
                <p>per person</p>
            </div>

            <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                    <Label>Departure Date</Label>

                    <Input
                        type="date"
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="rounded-2xl"
                    />

                    <FieldError />
                </TextField>
            </div>

            <Button className="w-full rounded-none">
                Book Now <FaArrowRight />
            </Button>
        </Card>
    );
};

export default BookingCard;
