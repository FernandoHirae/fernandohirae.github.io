import SideMenu from "./SideMenu";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [nav, setNav] = useState(true);

  const showNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <Link href="/" className="h-60 max-h-14 flex flex-row items-center gap-2 m-3 pl-6">
          <Image src="/imgs/FHirae.jpeg" className="max-h-12 max-w-12 rounded-full border-2 border-purple-500 lg:max-h-16 lg:max-w-16" width={60} alt="" />
          <span className="text-white text-xl italic font-bold">Fernando Hirae</span>
        </Link>

        <button type="button" className="text-white items-center gap-2 m-3 mr-4 lg:hidden" onClick={showNav} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mb-1 fill-current text-white">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18">
              </line>
            </svg>
          </svg>
        </button>
      </div>
      <div className={`${nav ? "hidden lg:flex" : "flex"}`}>
        <SideMenu />
      </div>

    </div>
  );
}

export default Header;