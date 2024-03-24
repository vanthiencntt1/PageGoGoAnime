"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Test() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images = [
    "/Main/toriko.jpg",
    "/Main/itachi.jpg",
    "/Main/toriko.jpg",
    "/Main/itachi.jpg",
    "/Main/toriko.jpg",
    "/Main/itachi.jpg",
  ];
  return (
    <div className="w-full h-[300px] flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full  " //max-w-7xl
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((imageSrc, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card>
                  <CardContent className="pt-2">
                    <span className="text-4xl ">
                      <Image
                        src={imageSrc}
                        width={900}
                        height={900}
                        className=" w-full h-60"
                        alt="Picture of the author"
                      />
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
