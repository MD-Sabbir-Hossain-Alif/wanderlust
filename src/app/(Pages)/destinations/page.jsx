import Destinations from "@/components/Destinations";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationsPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch("http://localhost:8000/destination", {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const destinations = await res.json();
    // console.log(destinations);
    return (
        <div className="my-5">
            <h2 className="text-5xl text-center my-10">All Destinations</h2>
            <div className="grid grid-cols-4 gap-4">
                {destinations.map((destination) => (
                    <Destinations
                        key={destination._id}
                        destination={destination}
                    ></Destinations>
                ))}
            </div>
        </div>
    );
};

export default DestinationsPage;
