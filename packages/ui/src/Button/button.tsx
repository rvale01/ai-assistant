import React, { ReactNode } from 'react';

type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | 'partially-rounded' | 'default';
    icon?: ReactNode;
    type?: 'primary' | 'secondary';
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    size = 'medium',
    shape = 'default',
    type = 'primary',
    icon,
    iconPosition,
    onClick,
    children,
}) => {
    const buttonStyles = `button ${iconPosition} ${type} ${size} ${shape}`;

    return (
        <button className={buttonStyles} onClick={onClick}>
            {icon && <span className="button-icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
