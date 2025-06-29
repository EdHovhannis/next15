import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={style.navbar_container}>
      <div className={style.navbar_logo}>
        <Link href={"/"}>Home</Link>
      </div>
      <ul className={style.navbar_items}>
        <li className={style.navbar_item}>
          <Link href={"/about"}> About </Link>
        </li>
        <li className={style.navbar_item}>
          <Link href={"/profile"}> Profile </Link>
        </li>
        <li className={style.navbar_item}>
          <Link href={"/blog"}> Blog </Link>
        </li>
      </ul>
    </nav>
  );
};
