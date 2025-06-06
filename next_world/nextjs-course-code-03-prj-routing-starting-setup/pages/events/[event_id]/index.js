import {getEventById} from "../../../dummy-data";
import {useRouter} from "next/router";
import {Fragment} from "react";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";

export default function EventDetailPage() {
    const router = useRouter();
    const evnetId = router.query.event_id;
    const event = getEventById(evnetId);

    if (!event) {
        return <p>No event found!</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}
