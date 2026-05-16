"use client";
import { Button } from "@heroui/react";

const Logout = ({ logoutAction }) => {
    return <Button onClick={logoutAction}>Log out</Button>;
};

export default Logout;
