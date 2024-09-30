import { useEffect, useState } from "react";
import EventCard from "./EventCard"
import { Event } from "../../types/Event";
import { getAllEvents } from "../../services/EventService";

interface EventListProps {
    setActiveEventId: React.Dispatch<React.SetStateAction<string>>
}

const EventList: React.FC<EventListProps> = ({ setActiveEventId: setActiveEvent }) => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getAllEvents();
            setEvents(eventsData);
        };

        fetchEvents();
    }, []);

    return (
        <>
            {events.map((event, index) => (
                <EventCard key={index} {...event} onClick={() => setActiveEvent(event.id)}
                />
            ))}
        </>
    )
}

export default EventList
