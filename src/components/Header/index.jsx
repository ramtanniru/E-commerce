'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession, signOut } from 'next-auth/react';
import menuData from "./menuData";
import Search from "../../utils/Search";
import Image from "next/image";
import IconButton from "@/utils/IconButton";
import AccountButton from "@/utils/Account";

export default function Header() {
  // const { data: session } = useSession();

  // return (
  //   <header className="header flex flex-row justify-around">
  //     <Link href="/">Home</Link>
  //     <Link href="/cart">Cart</Link>
  //     <Link href="/contact">Contact</Link>
  //     <Link href="/about">About</Link>
  //     <Link href="/products">Products</Link>
  //     <Link href="/wishlist">Wish List</Link>
      
  //     {session ? (
  //       <button onClick={() => signOut({ callbackUrl: '/api/auth/signin' })} className="ml-4">
  //         Sign Out
  //       </button>
  //     ) : (
  //       <>
  //         <Link href="/api/auth/signin" className="ml-4">Sign In</Link>
  //         <Link href="/api/auth/signup" className="ml-4">Sign Up</Link>
  //       </>
  //     )}
  //   </header>
  // );

  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white text-black border-b ${
        stickyMenu
          ? " border-none shadow-lg transition duration-100 "
          : ""
      }`}
    >
        <div className="w-full bg-black text-white flex flex-row py-3 justify-around items-center">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline font-semibold">ShopNow</span></p>
          <p>English 🔽</p>
        </div>
        <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 py-5 md:px-20 xl:flex 2xl:px-32">
          <div className="flex w-full items-center justify-between xl:w-3/5">
            <a href="/">
              <h1 className=" text-3xl font-semibold text-[#1F2937]">Exclusive</h1>
            </a>
        
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-label="hamburger Toggler"
              className="block xl:hidden"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="absolute right-0 block h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out  ${
                      !navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out  ${
                      !navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out  ${
                      !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                      !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}
          </div>
        
          {/* Nav Menu Start   */}
          <div
            className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
              navigationOpen &&
              "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5  xl:h-auto xl:p-0 xl:shadow-none"
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                {menuData.map((menuItem, key) => (
                  <li key={key} className={menuItem.submenu && "group relative"}>
                      <Link
                        href={`${menuItem.path}`}
                        className={
                          pathUrl === menuItem.path
                            ? "text-[#1F2937] underline underline-offset-[10px]"
                            : "text-[#1F2937] "
                        }
                      >
                        {menuItem.title}
                      </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Search/>

            <IconButton icon='like' src='/wishlist'/>
            <IconButton icon='cart' src='/cart'/>
            <AccountButton/>

            <div className="mt-7 flex items-center gap-6 xl:mt-0">
        
              <div className="bg-[#1F2937] px-5 py-3 rounded-md ">
                  <Link
                    href="/api/auth/signin"
                    className="text-regular font-medium text-white  "
                  >
                    Sign out
                  </Link>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}