"use client";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

export default function Links() {
  const links = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/about",
      text: "About",
    },
    {
      url: "/contact",
      text: "Contact",
    },
    {
      url: "/blog",
      text: "Blog",
    },
  ];

  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.url} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ url: "/admin", text: "Admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ url: "/login", text: "Login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.url} />
          ))}
        </div>
      )}
    </div>
  );
}
