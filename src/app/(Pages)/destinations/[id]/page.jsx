import DestinationDetails from "@/components/DestinationDetails";
import React from "react";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch(`http://localhost:8000/destination/${id}`);
    const destination = await res.json();
    // console.log(destination);
    return (
        <div>
            <DestinationDetails destination={destination}></DestinationDetails>
        </div>
    );
};

export default DetailsPage;
