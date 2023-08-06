"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
    <div>
      <Carousel
        axis="horizontal"
        infiniteLoop={true}
        animationHandler="fade"
        showThumbs={false}
        autoPlay={true}
        className="carousel-con"
      >
        <div>
          <Image 
          width={800}
          height={800}
          alt="Carousel01"
            className="w-full"
            src="/cuidados-saude-idosos.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image 
          width={800}
          height={800}
          alt="Carousel02" 
          src="/Dementia-with-lewy-bodies-hero-1200x525.jpg" />
          <p className="legend">
            <span className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Legend 2
            </span>
          </p>
        </div>
        <div>
          <Image 
          width={800}
          height={800}
          alt="Carousel03" src="/k57g6l86sh.jpg" />
          <p className="legend "><span className="text-2xl text-red-800">Legenda do terceiro item</span></p>
        </div>
      </Carousel>
    </div>
    <div className="md:grid md:grid-cols-2 hidden bg-indigo-500 gap-5 p-10">
      <div className="flex justify-end">
        <div className="">
          <p className="text-white text-3xl">Contate-nos</p>
          <p className="text-white text-3xl font-bold">Agende um visita</p>
        </div>
      </div>
      <div className="flex justify-start">
        <>
        <svg className="w-12 h-12 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
        </svg>
        </>
        <span className="text-white text-6xl px-3">(19) 3887-3384</span>
      </div>
    </div>
    </>
  );
}
