import React from 'react';
import { Event } from '../../types/Event';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import IconSpan from '../generic/IconSpan';
import { getDayString, getMonthString } from '../../utils/DateUtils';

interface EventCardProps extends Event {
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ date, contentType, eventType, title, priceFrom, priceTo, location, img, onClick }) => {

  return (
    <div className="flex flex-col w-full h-64 rounded overflow-hidden border border-karcis-lightgray hover:cursor-pointer" onClick={onClick}>
      <div className="h-1/2 w-full overflow-hidden">
        <img className="object-cover w-full h-full" src={img} alt={title} />
      </div>
      <div className="h-1/2 p-2 flex flex-row">
        <div className="w-1/4 px-2 flex flex-col items-center justify-center">
          <span className="font-bold">{getMonthString(date)}</span>
          <span className="font-bold">{getDayString(date)}</span>
        </div>
        <div className="w-3/4 px-2 flex flex-col justify-evenly">
          <span className="text-karcis-blue font-bold truncate">{contentType} • {eventType}</span>
          <span className="font-bold truncate">{title}</span>
          <span className="truncate">{priceFrom} - {priceTo}</span>
          <IconSpan icon={faLocationDot} text={location} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
