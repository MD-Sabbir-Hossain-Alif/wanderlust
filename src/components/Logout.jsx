"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Logout = () => {
    const handleLogout = async () => {
        await authClient.signOut();
    };
    return <Button onClick={handleLogout}>Log out</Button>;
};

export default Logout;
