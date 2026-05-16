import Image from "next/image";
import AuthPageClient from "./AuthPageClient";

const AuthPage = () => {
    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Left Side - Background + Branding */}
            <div className="hidden lg:flex lg:justify-center lg:items-center w-1/2 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/banner.png')",
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-white/5 via-white/10 to-white/5" />

                <div className="relative z-10 flex flex-col justify-center items-center text-white px-12 text-center">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-60 h-20 bg-linear-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg border rounded-3xl flex items-center justify-center shadow-2xl">
                            <Image
                                src="/assets/Wanderlast.png"
                                alt="Wanderlast"
                                width={200}
                                height={200}
                            ></Image>
                        </div>
                    </div>

                    <h2 className="text-5xl font-semibold leading-tight mb-6">
                        Create your account
                        <br />
                        and start building
                    </h2>

                    <p className="text-xl text-white/90 max-w-md">
                        Join thousands of innovators creating the future with
                        our powerful platform.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <AuthPageClient></AuthPageClient>
        </div>
    );
};

export default AuthPage;
