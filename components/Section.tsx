import React, { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Section() {
  const images = [
    "/Main/KurokonoBasket.jpg",
    "/Main/KurokonoBasket.jpg",
    "/Main/KurokonoBasket.jpg",
    "/Main/KurokonoBasket.jpg",
    "/Main/KurokonoBasket.jpg",
    "/Main/KurokonoBasket.jpg",
  ];

  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4"></CarouselItem>
          <CarouselItem className="pl-4">...</CarouselItem>
          <CarouselItem className="pl-4">...</CarouselItem>
        </CarouselContent>
      </Carousel>
      <p className="flex justify-center">
        <video controls autoPlay muted className=" text-center ">
          <source src="/ThangTuLaLoiNoiDoiCuaEm.mp4" type="video/mp4" />
        </video>
      </p>
    </div>
    // <div className=" w-full h-60 ">
    //   <Carousel
    //     opts={{
    //       align: "start",
    //     }}
    //     className="w-full h-60 max-w-sm flex justify-center mx-40"
    //   >
    //     <CarouselContent>
    //       {images.map((imageSrc, index) => (
    //         <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
    //           <CardContent className=" aspect-square items-center flex justify-center p-6">
    //             <Image
    //               src={imageSrc}
    //               width={900}
    //               height={900}
    //               className=" w-full h-60"
    //               alt="Picture of the author"
    //             />
    //           </CardContent>
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>

    //     <CarouselPrevious />
    //     <CarouselNext />
    //   </Carousel>
    // </div>
  );
}
