export interface Event {
  id: string;
  date: string;
  contentType: "Movie" | "TV-show" | "Sports-event";
  eventType: "Drive In" | "Cinema";
  title: string;
  summary: string;
  description: string;
  timeStart: string;
  timeEnd: string;
  ageRequirement: string;
  priceFrom: string;
  priceTo: string;
  location: string;
  img: string;
}

export interface EventsData {
  events: Event[];
}
