import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div style={{
      textAlign: "center",
      width: "90%",
      maxWidth: "40rem",
      margin: "0 auto",
      padding: "1rem",
    }}>
      <h1>The Home Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
