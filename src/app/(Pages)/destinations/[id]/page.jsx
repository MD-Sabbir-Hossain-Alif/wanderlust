import React from "react";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    return (
        <div>
            <h2 className="text-5xl">Destinations Details Page</h2>
        </div>
    );
};

export default DetailsPage;
