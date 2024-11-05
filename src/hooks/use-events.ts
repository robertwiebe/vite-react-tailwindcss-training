import { useEffect, useState } from "react";
import { Event } from "../types/Event";
import { getAllEvents } from "../services/EventService";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getAllEvents();
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return events;
};