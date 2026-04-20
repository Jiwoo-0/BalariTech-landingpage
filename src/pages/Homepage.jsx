import Navbar from "../components/Navbar";
import AboveFold from "./sections/AboveFold";
import ContactUs from "./sections/ContactUs";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Roadmap from "./sections/Roadmap";
import SelectedWork from "./sections/SelectedWork";
import Services from "./sections/Services";
import Story from "./sections/Story";
import TrustStrip from "./sections/TrustStrip";
import Work from "./sections/Work";
import WorkingWithBalari from "./sections/WorkingWithBalari";

const Homepage = () => {
    return(
        <div className="relative">
            <Navbar />
            <AboveFold />
            <TrustStrip/>
            <WorkingWithBalari/>
            <Story/>
            <Services/>
            <Roadmap />
            <Work />
            <SelectedWork />
            <CTA />
            <ContactUs />
            <Footer/>
        </div>
    )
}

export default Homepage;