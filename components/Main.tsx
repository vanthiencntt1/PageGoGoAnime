import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Data from "../Data/ListAnime.json";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Main() {
  const data = [
    {
      TenAnmie: "Anmine1",
      Tapmoinhat: "Tập 12",
      Tacgia: "Nguyễn Văn Thiện",
      LuotView: "1234334",
    },
    {
      TenAnmie: "Anmine2",
      Tapmoinhat: "Tập 34",
      Tacgia: "Nguyễn Văn Thiện",
      LuotView: "123234334",
    },
    {
      TenAnmie: "Anmine2",
      Tapmoinhat: "Tập 34",
      Tacgia: "Nguyễn Văn Thiện",
      LuotView: "123234334",
    },
    {
      TenAnmie: "Anmine2",
      Tapmoinhat: "Tập 34",
      Tacgia: "Nguyễn Văn Thiện",
      LuotView: "123234334",
    },
  ];
  {
    const listItems = data.map((product) => (
      <li key={product.TenAnmie}>
        {product.Tapmoinhat}, {product.Tacgia}
      </li>
    ));
  }
  return (
    <div className=" bg-slate-500 h-auto w-full lg:flex justify-center ">
      <main className="lg:w-2/3 w-full h-full ">
        <div className="grid lg:grid-cols-4 gap-4  md:gap-3  md:grid-cols-3 sm:gap-2  sm:grid-cols-2">
          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>

          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>

          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>

          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>

          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>

          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>

          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>

          <div className="border-x-2">
            <Image
              src={"/Main/KurokonoBasket.jpg"}
              width={200}
              height={300}
              className="h-auto w-full rounded-3xl "
              alt="Picture of the author"
            />
            <div className="">
              <span className="text-center "> KurokonoBasket</span>
              <Button
                variant="outline"
                className="mr-1  w-full flex justify-center"
              >
                Xem
              </Button>
            </div>
          </div>
        </div>
        <div className=" mx-auto">
          <Pagination className=" items-center">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <section className="lg:w-1/3 w-full h-full bg-orange-200">
        <div className="text-center">
          <span>Anime Mới</span>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Tên Anmine</TableHead>
              <TableHead>Tập mới nhất</TableHead>
              <TableHead>Tác Giả</TableHead>
              <TableHead className="text-right">Lượt view</TableHead>
            </TableRow>
          </TableHeader>
          {data.map((product) => (
            <TableHeader key={product.TenAnmie}>
              <TableRow>
                <TableHead className="w-[100px]"> {product.TenAnmie}</TableHead>
                <TableHead>{product.Tapmoinhat}</TableHead>
                <TableHead>{product.Tacgia}</TableHead>
                <TableHead className="text-right">
                  {product.LuotView} View
                </TableHead>
              </TableRow>
            </TableHeader>
          ))}
        </Table>
      </section>
    </div>
  );
}
