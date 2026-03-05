import logo from "../assets/logo.svg"
import aboveFoldBg from "../assets/above-fold-bg.png"
import Navbar from "./Navbar";

const Homepage = () => {
    return(
        <div className="relative">
        <Navbar />

        <section class="above-fold" className="h-screen flex flex-col p-[50px] gap-[20px] overflow-hidden relative">
            {/* abovefold bg image and gradient*/}
            <img src={aboveFoldBg} alt="" className="absolute inset-0 h-full w-full object-fill"/>

            <div className="absolute inset-0" style={{
                background: "linear-gradient(180deg, #1A0007 0%, #800020 61%)", opacity: 0.65
            }}/>

            <div className="relative z-10 pt-[40px]">
                <div className="border rounded-xl w-full h-full">
                    <div className="p-[50px] flex flex-row gap-[80px] h-full">
                        <div className="w-full text-white flex flex-col justify-between p-20">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-5xl">BUILT to be <span className="text-6xl text-"><br/>the CHOICE</span></h1>
                                <h2>Websites and marketing systems designed to turn attention into inquiries</h2>
                            </div>

                            <div className="flex flex-col gap-5">
                                <p className="w-[90%]">Balari Tech is a two-founder studio— <span className="font-bold">Builder + Marketer</span>—so the work doesn’t stop at looking good and hoping to get sales. We shape the flow, messaging, and tracking to raise conversion odds and give your launch a clear path to inquiry, plus steady support along the way.</p>
                                <div className="flex flex-col gap-[20px] w-[50%]">
                                    <a href="" className="bg-white text-black px-[50px] py-[20px] rounded-full text-[14px]">Book a free 30-min consult</a>
                                    <a href="" className="border text-white px-[50px] py-[20px] rounded-full text-[14px]">The Balari Roadmap</a>
                                </div>
                            </div>
                            
                        </div>
                        <div className="border border-black w-full text-white">test</div>
                    </div>
                </div>
            </div>

        </section>
        <section className="w-full h-10">

        </section>
        </div>
    )
}

export default Homepage;