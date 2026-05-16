import { Button } from "@heroui/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

            <div className="relative z-10 max-w-xl mx-auto text-center">
                {/* 404 Text */}
                <h1 className="text-[10rem] md:text-[14rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-200 to-zinc-500">
                    404
                </h1>

                <p className="text-zinc-400 text-lg mb-12 mx-auto">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist
                    or has been moved.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 p-1 bg-white hover:bg-zinc-100 text-black rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <Button className="bg-cyan-500">
                            <FaHome />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                {/* Footer Text */}
                <p className="mt-16 text-zinc-500 text-sm">
                    Lost? Don&apos;t worry, it happens to the best of us.
                </p>
            </div>

            {/* Decorative Bottom Text */}
            <div className="absolute bottom-30 left-1/2 -translate-x-1/2 text-zinc-600 text-xs tracking-[3px] font-mono">
                ERROR 404 — PAGE NOT FOUND
            </div>
        </div>
    );
}
