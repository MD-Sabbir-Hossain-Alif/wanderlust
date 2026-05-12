"use client";

import { usePathname } from "next/navigation";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const AuthPageClient = () => {
    const path = usePathname();
    console.log(path);
    return (
        <>
            {path === "/signup" ? (
                <SignupForm></SignupForm>
            ) : path === "/login" ? (
                <LoginForm></LoginForm>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default AuthPageClient;
