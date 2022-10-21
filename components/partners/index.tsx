import React from "react";
import Image from "next/image";
import { partners } from "../../data/partners";

const Partners = () => {
  return (
    <main
      id="partners"
      className="w-screen relative flex flex-col justify-start items-center bg-transparent px-5 md:px-10 lg:px-48 py-20 z-0 "
    >
      <div className="absolute bottom-0 -left-48 md:bottom-48 md:-left-44 lg:-bottom-48 lg:-left-40 w-[512px] h-[512px] md:w-[800px] md:h-[800px] opacity-40 blur-2xl partners-gradient-left" />
      {/*<div className="absolute -top-72 -right-48 w-[512px] h-[512px] md:w-[900px] md:h-[900px] opacity-40 blur-2xl partners-gradient-right" />*/}
      <div className="absolute -bottom-1/2 right-0 rotate-45 w-[512px] h-[512px] md:w-[900px] md:h-[900px] opacity-40 blur-2xl faq-gradient-right" />
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold w-full pb-10 font-helvetica text-slate-50"
      >
        Our Partners
      </h2>
      <div
        data-aos="fade-up"
        className="w-full flex flex-row flex-wrap justify-center items-center mt-5 mb-10"
      >
        <h3 className="w-full font-bold text-2xl mb-5 text-slate-50 font-helvetica">
          <span className="gradient-pumpkin text-transparent !bg-clip-text">
            Board
          </span>{" "}
          Partners
        </h3>
        <div className="w-full grid grid-cols-2 gap-2 lg:gap-3">
          {partners.board_partners.map((partner, index) => (
            <div className="h-full" key={index}>
              <a
                className="h-full flex flex-col justify-center items-center duration-300 transition-all ease-in-out border-[1px] hover:border-amber-500/40 border-slate-50/10 bg-gradient-to-br from-slate-50/5 to-slate-50/[0.01] rounded-md backdrop-blur-lg"
                href={partner.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-slate-50 text-center flex justify-center items-center py-4 px-6 text-sm w-full h-full duration-300 ease-in-out transition-all font-normal lg:hover:font-bold lg:hover:text-transparent gradient-pumpkin !bg-clip-text cursor-pointer">
                  {partner.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full flex flex-wrap justify-center mt-4"
      >
        <h3 className="w-full font-bold text-2xl mb-5 font-helvetica text-slate-50">
          <span className="gradient-rose text-transparent !bg-clip-text">
            Previous
          </span>{" "}
          Partners
        </h3>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {partners.normal_partners.map((partner, index) => (
            <div className="h-full" key={index}>
              <a
                key={index}
                className="h-full flex flex-col justify-center items-center duration-300 transition-all ease-in-out border-[1px] hover:border-rose-500/40 border-slate-50/10 bg-gradient-to-br from-slate-50/5 to-slate-50/[0.01] rounded-md backdrop-blur-lg"
                href={partner.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-slate-50 text-center py-4 px-6 flex justify-center items-center text-sm w-full h-full duration-300 ease-in-out transition-all font-normal hover:font-bold hover:tracking-wide hover:text-transparent gradient-rose !bg-clip-text cursor-pointer">
                  {partner.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Partners;
