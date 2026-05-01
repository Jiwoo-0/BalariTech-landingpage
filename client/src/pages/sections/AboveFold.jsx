import React from "react";
import animatedBg from "../../assets/above-fold-bg.gif";
import { Button } from "../../components/Button";

const AboveFold = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-secondary">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
        style={{ backgroundImage: `url(${animatedBg})` }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <h1 className="font-display text-display leading-tight">
                  Your digital front door, <br />
                  built clearly.
                </h1>
                <p className="text-h3 mt-4 max-w-xl">
                  Balari Tech builds websites and marketing systems that help
                  businesses show up clearly online, with the right support behind
                  them.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Button 
                  href="#consult" 
                  variant="primary" 
                  size="lg"
                  shadow="2xl"
                  className="w-full md:w-96"
                >
                  Book a free 20-min consult
                </Button>
                <Button 
                  href="#roadmap" 
                  variant="secondary" 
                  size="lg"
                  shadow="2xl"
                  className="w-full md:w-96"
                >
                  The Balari Roadmap
                </Button>
              </div>
            </div>

            {/* Right Content (Images/Media) */}
            <div className="w-[37%] hidden md:flex justify-end items-center h-full">
              {/* Placeholder for hero image/media */}
              <div className="w-full h-96 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="text-white/50">Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboveFold;
