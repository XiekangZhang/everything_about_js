import Image from "next/image";
import Link from "next/link";
import classes from "./EventItem.module.css";

export default function EventItem({ event }) {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = event.location.replace(",", "\n");
  return (
    <li className={classes.item}>
      <img
        src={`/${event.image}`}
        alt={event.title}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          {/*<p>{event.description}</p>*/}
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes}>
          <Link href={`/events/${event.id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
