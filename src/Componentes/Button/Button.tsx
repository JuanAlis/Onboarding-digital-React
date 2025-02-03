import React from 'react';
import "./button.css";

interface Button {
    direction: string,
    action: () => void;
}
const Button: React.FC<Button> = ({ direction, action }) => {
    return (
        <div
            className={`button ${direction === "right" ? "button-right" : "button-left"}`}
            onClick={action}
        >
            {direction === 'right' ? (
                <svg
                className='button-right'
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ffff"
                >
                    <path d="M693.5-467.5H217V-493h476.5L462-724.5l18-18.5 263 263-263 263-18-18.5 231.5-232Z" />
                </svg>
            ) : (
                <svg
                className='button-left'
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000"
                >
                    <path d="M267.5-467.5H744V-493H267.5L498-724.5l-18-18.5-263 263 263 263 18-18.5L267.5-467.5Z" />
                </svg>
            )}
        </div>
    );
};

export default Button
