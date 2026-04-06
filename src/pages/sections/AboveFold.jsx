import React from "react";
import animatedBg from '../../assets/above-fold-bg.gif'

const AboveFold = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden border-8 border-black bg-secondary">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
        style={{ backgroundImage: `url(${animatedBg})` }}
      />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 h-full w-full items-center content-center">
        <div className="bg-red-500 w-[40%] h-[50vh]">
          
        </div>
      </div>
    </section>
  );
};

export default AboveFold;
