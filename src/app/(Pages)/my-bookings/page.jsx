import MyBookedCard from "@/components/MyBookedCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(), // you need to pass the headers object.
    });
    // console.log(session?.user);
    let data = [];

    if (session) {
        const { id } = session.user;
        const res = await fetch(`http://localhost:8000/my-bookings/${id}`, {
            cache: "no-store",
        });
        data = await res.json();
        // console.log(data);
    }
    return (
        <div className="mb-10">
            <h2 className="text-4xl font-bold mt-4">My Bookings</h2>
            <p className="mb-2">Manage and view your upcoming travel plans</p>
            {session ? (
                <div className="flex flex-col gap-4">
                    {data.map((booked) => (
                        <MyBookedCard key={booked._id} booked={booked} />
                    ))}
                </div>
            ) : (
                <div className="text-center my-50">Please login</div>
            )}
        </div>
    );
};

export default page;
