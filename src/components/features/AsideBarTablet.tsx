"use client";

import { useRef, useState } from "react";

import { animationMobileNav } from "@/src/helpers/utils/animations";

import AsideBarNavigation from "./AsideBarNavigation";
import BurgerButton from "../buttons/BurgerButton";
import UserInfo from "./UserInfo";

export default function AsideBarTablet() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [isCloseAnimation, setIsCloseAnimation] = useState(false);

  function handleToggleBurger() {
    if (!isBurgerOpened) {
      setIsBurgerOpened(true);
      animationMobileNav(navRef.current, "appear");
      return;
    }

    setIsCloseAnimation(true);
    const animation = animationMobileNav(navRef.current, "disappear");

    if (!animation) {
      setIsBurgerOpened(false);
      setIsCloseAnimation(false);
      return;
    }

    setIsBurgerOpened(false);

    animation.onfinish = () => {
      setIsCloseAnimation(false);
    };
  }

  return (
    <aside className="bg-black-base xmd:hidden relative z-900 flex flex-row-reverse justify-between px-10 py-5">
      <UserInfo />

      <BurgerButton
        isBurgerOpened={isBurgerOpened}
        onClick={handleToggleBurger}
      />

      <div
        ref={navRef}
        className={`${isBurgerOpened || isCloseAnimation ? "flex" : "hidden"} bg-black-base absolute right-1/2 w-full translate-x-1/2 translate-y-1/3 flex-col items-center justify-center p-5`}
      >
        <AsideBarNavigation onClick={handleToggleBurger} />
      </div>
    </aside>
  );
}
