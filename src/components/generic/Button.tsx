import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface BaseProps {
    type: 'primary' | 'secondary';
    className?: string;
}

interface TextProps extends BaseProps {
    text: string;
    icon?: never;
}

interface IconProps extends BaseProps {
    text?: string;
    icon: IconDefinition;
}

type ButtonProps = TextProps | IconProps;

const Button: React.FC<ButtonProps> = ({ type, text, className, icon }) => {
    const buttonClassNames = classNames(
        'border border-karcis-blue rounded px-3 py-2 text-sm',
        {
            'bg-karcis-blue text-white': type === 'primary',
            'text-karcis-blue': type === 'secondary',
        },
        className
    );

    return (
        <button className={buttonClassNames}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {text && <span>{text}</span>}
        </button>
    );
};

export default Button;
