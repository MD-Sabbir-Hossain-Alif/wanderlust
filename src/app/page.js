import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div className="container mx-auto relative">
			<div className="absolute w-full top-4 left-0 px-4">
				<Navbar></Navbar>
			</div>
			<Banner></Banner>
			<Featured></Featured>
			<Footer></Footer>
		</div>
	);
}
