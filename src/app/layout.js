import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const josefinSans = Josefin_Sans({
	subsets: ["latin"],
});


export const metadata = {
	title: "Wanderlust",
	description: "Bast website for traveler",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${josefinSans.className} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				{children}
			</body>
		</html>
	);
}
