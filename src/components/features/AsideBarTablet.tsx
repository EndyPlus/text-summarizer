"use client";

import { useState } from "react";
import SummarizeButton from "../buttons/SummarizeButton";
import UserInfo from "../ui/UserInfo";
import AsideBarNavigation from "./AsideBarNavigation";
import BurgerButton from "../buttons/BurgerButton";

export default function AsideBarTablet() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleToggleBurger() {
    setIsBurgerOpen((prevState) => !prevState);
  }

  return (
    <aside className="bg-black-base xmd:hidden relative z-999 flex flex-row-reverse justify-between px-10 py-5">
      <UserInfo />

      <BurgerButton burgerState={isBurgerOpen} onClick={handleToggleBurger} />

      {isBurgerOpen && (
        <div className="bg-black-base absolute right-1/2 flex w-full translate-x-1/2 translate-y-1/3 flex-col items-center justify-center p-5">
          <AsideBarNavigation />
        </div>
      )}
    </aside>
  );
}
