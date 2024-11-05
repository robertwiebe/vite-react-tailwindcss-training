import { useEffect, useState } from "react";
import { getEventById } from "../services/EventService";
import { Event } from "../types/Event";

export const useEvent = (eventId: string) => {
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getEventById(eventId);
      setEvent(event);
    };

    fetchEvent();
  }, [eventId]);

  return event;
};
