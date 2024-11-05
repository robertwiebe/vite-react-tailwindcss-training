import EventCard from "./EventCard";
import { useEvents } from "../../hooks/use-events";

interface EventListProps {
  setActiveEventId: React.Dispatch<React.SetStateAction<string>>;
}

const EventList: React.FC<EventListProps> = ({
  setActiveEventId: setActiveEvent,
}) => {
  const events = useEvents();

  return (
    <>
      {events.map((event, index) => (
        <EventCard
          key={index}
          {...event}
          onClick={() => setActiveEvent(event.id)}
        />
      ))}
    </>
  );
};

export default EventList;
