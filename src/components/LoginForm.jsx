"use client";

import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";

const LoginForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userLoginData = Object.fromEntries(formData);
        console.log(userLoginData);

        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };

    return (
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
                        Log in to your account
                    </h2>
                    <p className="text-gray-600 mt-2">Get started in seconds</p>
                </div>

                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
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
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
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
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1
                            number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>

                <p className="text-center text-sm text-gray-600 mt-8">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/signup"
                        className="text-indigo-600 hover:underline font-medium"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default LoginForm;
