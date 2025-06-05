import React from "react";
import style from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.navbar_container}>
      <div className={style.navbar_logo}>Logo</div>
      <ul className={style.navbar_items}>
        <li className={style.navbar_item}>item-1</li>
        <li className={style.navbar_item}>item-2</li>
        <li className={style.navbar_item}>item-3</li>
      </ul>
    </nav>
  );
};
