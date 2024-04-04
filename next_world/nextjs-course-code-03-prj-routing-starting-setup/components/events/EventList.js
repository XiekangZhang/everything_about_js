import EventItem from "./EventItem";
import classes from "./EventList.module.css";

export default function EventList({ events }) {
  return (
    <ul classes={classes.list}>
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </ul>
  );
}
