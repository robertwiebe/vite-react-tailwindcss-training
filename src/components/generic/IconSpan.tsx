import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconSpanProps {
    icon: IconDefinition;
    text: string;
}

const IconSpan: React.FC<IconSpanProps> = ({ icon, text }) => {
    return (
        <span className="flex flex-row truncate items-center gap-2">
            <FontAwesomeIcon icon={icon} className='text-karcis-blue' />
            {text}
        </span>
    );
};

export default IconSpan;
