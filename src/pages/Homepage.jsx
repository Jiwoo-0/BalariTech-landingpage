import Navbar from "../components/Navbar";
import AboveFold from "./sections/AboveFold";
import TrustStrip from "./sections/TrustStrip";
import WorkingWithBalari from "./sections/WorkingWithBalari";

const Homepage = () => {
    return(
        <div className="relative">
            <Navbar />
            <AboveFold />
            <TrustStrip/>
            <WorkingWithBalari/>
        </div>
    )
}

export default Homepage;