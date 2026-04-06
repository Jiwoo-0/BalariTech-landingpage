import logo from "../assets/logo.svg"
import aboveFoldBg from "../assets/above-fold-bg.png"
import Navbar from "../components/Navbar";
import AboveFold from "./sections/AboveFold";

const Homepage = () => {
    return(
        <div className="relative">
            <Navbar />
            <AboveFold />
        </div>
    )
}

export default Homepage;