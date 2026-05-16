import DestinationDetails from "@/components/DestinationDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    // console.log(token);

    const res = await fetch(`http://localhost:8000/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const destination = await res.json();
    // console.log(destination);
    return (
        <div>
            <DestinationDetails destination={destination}></DestinationDetails>
        </div>
    );
};

export default DetailsPage;
