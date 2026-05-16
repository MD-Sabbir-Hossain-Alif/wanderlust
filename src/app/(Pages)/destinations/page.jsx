import Destinations from "@/components/Destinations";

const DestinationsPage = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/destination`,
    );
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
