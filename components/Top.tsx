import React from "react";
import Image from "next/image";
import { flushAllTraces } from "next/dist/trace";

export default function Top() {
  return (
    <div className="h-10 w-full bg-red-400 rounded-ee-full rounded-es-full">
      {/* <Image
        src="/layout/logo.jpg"
        width={40}
        height={40}
        className="h-auto w-auto left-32 ml-10"
        alt="Picture of the author"
      /> */}
    </div>
  );
}
