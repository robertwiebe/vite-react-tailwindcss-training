import { faCalendar, faLocationDot, faTriangleExclamation, faUserClock, faUsers } from "@fortawesome/free-solid-svg-icons"
import IconSpan from "../generic/IconSpan"
import Button from "../generic/Button"
import EventInformationWidget from "./EventInformationWidget"
import { useEffect, useState } from "react";
import { Event } from "../../types/Event";
import { getEventById } from "../../services/EventService";
import { getDurationString, getTimeString } from "../../utils/DateUtils";

interface EventDetailProps {
    activeEventId: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ activeEventId }) => {
    const [activeEvent, setActiveEvent] = useState<Event | null>(null);

    useEffect(() => {
        const fetchEvent = async () => {
            const event = await getEventById(activeEventId);
            setActiveEvent(event);
        };

        fetchEvent();
    }, [activeEventId]);

    if (!activeEvent) return;

    return (
        <>
            <div className='w-full h-72 p-4 bg-karcis-lightblue rounded'>
                <div className='w-full h-full rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-cover' src={activeEvent.img} />
                </div>
            </div>
            <div className='flex flex-row gap-8'>
                <div className='w-2/3 flex flex-col gap-4'>
                    <h1>{activeEvent.title}</h1>
                    <IconSpan icon={faLocationDot} text={activeEvent.location} />
                    <IconSpan icon={faCalendar} text={new Date(activeEvent.date).toLocaleDateString()} />
                    <p>{activeEvent.summary} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem dolorem illum delectus vitae quo perspiciatis omnis ut et incidunt nam dolores eius beatae quas possimus pariatur, sit laboriosam. Officia.</p>
                </div>
                <div className='w-1/3 pr-[10px]'>
                    <div className="w-full h-48 flex flex-col justify-center items-center gap-8 bg-white border border-karcis-black rounded-3xl drop-shadow-[10px_10px_0_rgba(0,33,186,1)]" >
                        <div className='flex flex-col items-center'>
                            <span>Tickets starting at</span>
                            <span>{activeEvent.priceFrom}</span>
                        </div>
                        <Button type='primary' text='Buy Tickets' className='w-3/4' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h2>Event Information</h2>
                <div className="w-full flex flex-row">
                    <EventInformationWidget icon={faUserClock} title="Duration" text={`${getTimeString(activeEvent.timeStart)} - ${getTimeString(activeEvent.timeEnd)}\n${getDurationString(activeEvent.timeStart, activeEvent.timeEnd)}`} />
                    <EventInformationWidget icon={faUsers} title="Audience" text={`This movie is suitable for audience aged ${activeEvent.ageRequirement} and above`} />
                    <EventInformationWidget icon={faTriangleExclamation} title="Attention" text={`Face mask and social distancing are mandatory outside the car.`} />
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h3>Description</h3>
                <p> {activeEvent.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorem officiis quod perferendis assumenda id non molestiae delectus, minima debitis cum officia adipisci vel, consectetur eius laborum corrupti praesentium excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, inventore blanditiis at rem, nam, deleniti dolorum corrupti minus eius harum eaque atque nulla consequuntur iste ipsa delectus dicta in nisi!</p>
            </div>
        </>
    )
}

export default EventDetail
