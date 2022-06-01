import React from "react";

function loveIcon({ className, width = 20, height = 20, bg = 'none', borderWidth = 2, borderColor = '#757C8F' }) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 20 19"
            fill={bg}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.5429 1C11.4999 1 10 4.0909 10 4.0909C10 4.0909 8.50008 1 5.45712 1C2.98412 1 1.02579 3.13175 1.00048 5.67547C0.948919 10.9556 5.06573 14.7105 9.57815 17.8662C9.70255 17.9534 9.84954 18 10 18C10.1505 18 10.2975 17.9534 10.4219 17.8662C14.9338 14.7105 19.0506 10.9556 18.9995 5.67547C18.9742 3.13175 17.0159 1 14.5429 1Z"
                stroke={borderColor}
                strokeWidth={borderWidth}
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    );
}
export default loveIcon;
