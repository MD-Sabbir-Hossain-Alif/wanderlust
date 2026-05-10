import Navbar from "@/components/Navbar";

const PagesLayout = ({ children }) => {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
        </div>
    );
};

export default PagesLayout;