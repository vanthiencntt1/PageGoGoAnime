import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    <Carousel>
      <CarouselContent className="-ml-4">
        <CarouselItem className="pl-4"></CarouselItem>
        <CarouselItem className="pl-4">...</CarouselItem>
        <CarouselItem className="pl-4">...</CarouselItem>
      </CarouselContent>
    </Carousel>
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
