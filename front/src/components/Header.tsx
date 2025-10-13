"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PopupRight from "./Popup";

const Header = ({ h, c, a }) => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="">
      <section className="bg-amber-500/90 m-2 rounded-sm">
        <div className="flex justify-between space-x-4">
          <div className="p-2 flex justify-start">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div className="flex my-auto space-x-4 justify-end hidden lg:block md:block lg:flex md:flex pr-2">
            <Link href={"/"}>
              <h5 className="a1">{h}</h5>
            </Link>
            <Link href={"/about"}>
              <h5 className="a1">{a}</h5>
            </Link>
            <Link href={"/contact"}>
              <h5 className="a1">{c}</h5>
            </Link>
          </div>
          <div className="flex my-auto space-x-4 justify-end block lg:hidden md:hidden lg:flex md:flex pr-2" onClick={()=>setIsOpen(true)}>
            <Image
              className="dark:invert"
              src="/hamburger-menu.png"
              alt="Menu logo"
              width={38}
              height={38}
              priority
            />
          </div>
        </div>
      </section>
      <PopupRight isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Header;

// import PopupRight from "./Popup";

// const Header = ({ h, c, a }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <section className="bg-amber-500/90 m-2 rounded-sm">
//         <div className="flex justify-between p-2">
//           <h1 className="text-lg font-bold">My Website</h1>
//           <button
//             className="block lg:hidden"
//             onClick={() => setIsOpen(true)}
//           >
//             Open Menu
//           </button>
//         </div>
//       </section>

//       <PopupRight isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </div>
//   );
// };
// export default Header;