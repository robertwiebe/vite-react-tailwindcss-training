import { Event, EventsData } from "../types/Event";

const EVENTS_URL = '/events.json';

export const getAllEvents = async (): Promise<Event[]> => {
    try {
        const response = await fetch(EVENTS_URL);
        const data: EventsData = await response.json();

        return data.events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};

export const getEventById = async (id: string): Promise<Event | null> => {
    try {
        const events = await getAllEvents();
        const event = events.find(event => event.id === id);

        return event || null;
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        return null;
    }
};