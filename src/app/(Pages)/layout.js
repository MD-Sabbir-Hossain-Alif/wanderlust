import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PagesLayout = ({ children }) => {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default PagesLayout;