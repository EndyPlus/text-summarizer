"use client";

import { useState } from "react";
import AsideBarNavigation from "./AsideBarNavigation";
import BurgerButton from "../buttons/BurgerButton";
import UserInfo from "./UserInfo";

export default function AsideBarTablet() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  function handleToggleBurger() {
    setIsBurgerOpened((prevState) => !prevState);
  }

  return (
    <aside className="bg-black-base xmd:hidden relative z-900 flex flex-row-reverse justify-between px-10 py-5">
      <UserInfo />

      <BurgerButton
        isBurgerOpened={isBurgerOpened}
        onClick={handleToggleBurger}
      />

      {isBurgerOpened && (
        <div className="bg-black-base absolute right-1/2 flex w-full translate-x-1/2 translate-y-1/3 flex-col items-center justify-center p-5">
          <AsideBarNavigation onClick={handleToggleBurger} />
        </div>
      )}
    </aside>
  );
}
