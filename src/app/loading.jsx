import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted">Loading...</span>
        </div>
    );
};

export default loading;
