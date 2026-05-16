'use client';

import { LuTriangleAlert } from "react-icons/lu";

export default function Error({ error, reset }) {
    return (
        <div className="flex min-h-[60vh] items-center justify-center font-sans my-25">
            <div className="w-full max-w-md border border-gray-200 bg-white p-10 text-center shadow-lg rounded-xl dark:border-gray-800 dark:bg-gray-900">

                {/* Error Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    <LuTriangleAlert />
                </div>

                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Something went wrong!
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    An unexpected error has occurred. We&apos;ve been notified and are looking into it.
                </p>

                {/* Show Error Message */}
                {error?.message && (
                    <div className="mb-6 overflow-auto rounded-md bg-red-50 p-3 text-left text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
                        <code>{error.message}</code>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center gap-3">
                    <button
                        onClick={() => reset()}
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.href = '/'}
                        className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                        Go Home
                    </button>
                </div>

            </div>
        </div>
    );
}