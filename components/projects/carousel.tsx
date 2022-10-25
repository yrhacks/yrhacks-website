import React, { useState, useEffect, useCallback } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "../../data/projects";
import Image from "next/image";

const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative p-2 w-full bg-transparent flex flex-row flex-nowrap justify-between items-center">
      <button disabled={!prevBtnEnabled}>
        <TiChevronLeft
          className="text-slate-50 text-3xl lg:text-7xl mx-2"
          onClick={scrollPrev}
        />
      </button>
      <div className="overflow-hidden w-full" ref={viewportRef}>
        <div className="flex select-none ">
          {projects.map((project, index) => (
            <div
              className="relative min-w-full flex flex-col items-center justify-start"
              key={index}
            >
              <h3 className="text-slate-50 text-xl lg:text-4xl mb-2 lg:mb-4 font-bold text-center">
                {project.award}
              </h3>
              <div className="relative rounded-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="intrinsic"
                  objectFit="cover"
                  width={500}
                  height={300}
                />
              </div>
              <h4 className="gradient-pumpkin text-transparent !bg-clip-text font-extrabold text-2xl lg:text-4xl pt-2 text-center">
                {project.name}
              </h4>
              <h5 className="font-medium text-slate-50 text-sm md:text-base py-1 lg:py-3 text-center">
                Created by: {project.developers.join(", ")}
              </h5>
              <p className="text-slate-50 font-normal text-lg text-center">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button disabled={!nextBtnEnabled}>
        <TiChevronRight
          className="text-slate-50 text-3xl lg:text-7xl mx-2"
          onClick={scrollNext}
        />
      </button>
    </div>
  );
};

export default Carousel;
