import Link from "next/link";

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
  return (
    <div>
      {links.map((link) => (
        <Link href={link.url} key={link.url}>
          {link.text}
        </Link>
      ))}
    </div>
  );
}
