// dns for server error
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);


import { Josefin_Sans } from "next/font/google";
import "./globals.css";

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
