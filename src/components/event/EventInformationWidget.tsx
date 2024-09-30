import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface EventInformationWidgetProps {
    icon: IconDefinition;
    title: string;
    text: string;
}

const EventInformationWidget: React.FC<EventInformationWidgetProps> = ({ icon, title, text }) => {
    return (
        <div className="w-1/3 gap-4 flex flex-row">
            <FontAwesomeIcon icon={icon} className="text-4xl text-karcis-blue mt-[.75rem]" />
            <div className="w-3/4 flex flex-col gap-4">
                <h2>{title}</h2>
                <span className="whitespace-pre-line">{text}</span>
            </div>
        </div>
    )
}

export default EventInformationWidget
