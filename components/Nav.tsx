"use client";

import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

function componentDidMount() {
  const elements = document.getElementsByClassName("menu");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("hidden")) {
      elements[i].classList.remove("hidden");
    } else {
      elements[i].classList.add("hidden");
    }
  }
}

// function componentDidMount() {

//   for (let i = 0; i < elements.length; i++) {
//     elements[i].classList.remove("hidden");
//   }
// }

export default function Nav() {
  return (
    <div>
      <header className="py-6 mx-10 uppercase">
        <nav className=" flex flex-row justify-between items-center">
          <div className=" logo  basis-2/6 text-center font-semibold cursor-pointer">
            <Link href="/Home" className="hover-Item">
              GOGO ANIME
            </Link>
          </div>
          <ul className=" hidden lg:basis-3/6 lg:flex lg:items-center lg:justify-end gap-8">
            <li>
              <Link href="/Home" className="hover-Item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover-Item">
                Anime
              </Link>
            </li>
            <li>
              <Link href="" className="hover-Item">
                Thể Loại
              </Link>
              {/* <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="hover-Item rounded-none border-0">
                    {" "}
                    Lịch Chiếu
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar> */}
            </li>
            <li>
              <Link href="" className="hover-Item">
                Top Anime
              </Link>
              {/* <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="hover-Item">
                    {" "}
                    Top Anime
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar> */}
            </li>
            <li>
              <Link href="/register" className="hover-Item">
                Đăng ký
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover-Item">
                Đăng Nhập
              </Link>
            </li>
            <li>
              <Link href="/InSetDataGGSheet" className="hover-Item">
                About
              </Link>
            </li>
          </ul>
          <ul className=" hidden lg:basis-1/6  lg:flex lg:justify-end lg:items-center">
            <input placeholder="Tìm Kiếm" className=" rounded-2xl border-4" />
          </ul>
          <div className="lg:hidden">
            <button onClick={() => componentDidMount()} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>

        <nav className=" w-40 rounded-xl  uppercase menu hidden flex justify-end px-9">
          <ul>
            <li>
              <Link href="/" className="hover-Item ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover-Item ">
                Anime
              </Link>
            </li>
            <li>
              <Link href="/" className="hover-Item ">
                Thể Loại
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    // <Menubar className="">
    //   <MenubarMenu>
    //     <MenubarTrigger className="mx-10 ">
    //       <MenubarShortcut>⌘ </MenubarShortcut>Trang Chủ
    //     </MenubarTrigger>
    //   </MenubarMenu>
    //   <MenubarMenu>
    //     <MenubarTrigger className="">Thể Loại</MenubarTrigger>
    //     <MenubarTrigger className="">Top Anime</MenubarTrigger>
    //     <MenubarTrigger className=""> Lịch Chiếu</MenubarTrigger>

    //     <MenubarContent>
    //       <MenubarItem>
    //         New Tab <MenubarShortcut>⌘T</MenubarShortcut>
    //       </MenubarItem>
    //       <MenubarItem>New Window</MenubarItem>
    //       <MenubarSeparator />
    //       <MenubarItem>Share</MenubarItem>
    //       <MenubarSeparator />
    //       <MenubarItem>Print</MenubarItem>
    //     </MenubarContent>
    //   </MenubarMenu>
    //   <MenubarMenu>
    //     <MenubarTrigger className=""> tìm kiếm</MenubarTrigger>
    //   </MenubarMenu>
    // </Menubar>
  );
}
