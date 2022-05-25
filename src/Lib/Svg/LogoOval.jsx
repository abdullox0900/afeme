import React from "react";

function LogoOval({classNa, width = 100, height= 100}) {
    return (
        <svg className={classNa} width={width} height={height} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32.5C0 14.5507 14.5507 0 32.5 0C50.4493 0 65 14.5507 65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5Z" fill="url(#paint0_linear_0_23)" />
            <defs>
                <linearGradient id="paint0_linear_0_23" x1="58.5" y1={65} x2="9.39402" y2="8.03302" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2972FE" />
                    <stop offset={1} stopColor="#6499FF" />
                </linearGradient>
            </defs>
        </svg>
    )
};

export default LogoOval;