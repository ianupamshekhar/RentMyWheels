"use client";
import React from 'react';
import Image from 'next/image';

import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
            type={btnType || "button"}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image src={rightIcon} alt="icon" fill className='object-contain' />
                </div>
            )}
        </button>
    );
};

export default CustomButton;
