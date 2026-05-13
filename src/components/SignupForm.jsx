"use client";

import React, { useState } from "react";
import {
    Button,
    Form,
    Input,
    TextField,
    Label,
    FieldError,
} from "@heroui/react";
import {
    LuEye,
    LuEyeOff,
    LuUser,
    LuMail,
    LuLock,
    LuUpload,
} from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newuser = Object.fromEntries(formData);

        const { name, image, email, password } = newuser;

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password,
        });

        if (data) {
            alert("Account created successfully!");
            redirect("/");
        } else if (error) {
            alert(
                error?.message || "Failed to create account. Please try again.",
            );
        }
    };
    return (
        <>
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-indigo-600 rounded-3xl flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">
                                    A
                                </span>
                            </div>
                            <span className="text-4xl font-bold text-gray-900">
                                YourApp
                            </span>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Create account
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Get started in seconds
                        </p>
                    </div>

                    <Form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <TextField isRequired name="name">
                            <Label className="flex gap-1">
                                <LuUser size="16" />
                                <span>Full Name</span>
                            </Label>
                            <Input placeholder="John Doe" />
                            <FieldError>
                                Username must be at least 3 characters
                            </FieldError>
                        </TextField>

                        {/* Profile image url */}
                        <TextField name="image">
                            <Label className="flex gap-1">
                                <LuUpload size="16" />
                                <span>Profile Photo URL</span>
                            </Label>
                            <Input placeholder="https://www.example.com/user.png" />
                            <FieldError />
                        </TextField>

                        {/* Email */}
                        <TextField
                            isRequired
                            type="email"
                            name="email"
                            validate={(value) => {
                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        value,
                                    )
                                ) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="flex gap-1">
                                <LuMail size="16" />
                                <span>Email Address</span>
                            </Label>
                            <Input placeholder="you@mail.com" />
                            <FieldError />
                        </TextField>

                        {/* Password */}
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className="flex gap-1">
                                <LuLock size="16" />
                                <span>Password</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="Enter your password"
                                    className="w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <LuEyeOff size={18} />
                                    ) : (
                                        <LuEye size={18} />
                                    )}
                                </button>
                            </div>
                            <FieldError />
                        </TextField>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full text-base font-semibold py-7 rounded-2xl"
                        >
                            Create Account
                        </Button>
                    </Form>

                    <p className="text-center text-sm text-gray-600 mt-8">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-indigo-600 hover:underline font-medium"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignupForm;
