// dns server for mongodb connection
const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]); // Cloudflare + Google DNS

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