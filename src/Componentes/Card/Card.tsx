import "./card.css";
import Button from '../Button/Button';
import Indicator from '../indicador/Indicator';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';





interface CardProps {
    title: string;
    description: string;
    bgColor?: string;
    imageUrl?: string;
    nextStep: () => void;
    backStep: () => void;
    showButtons: number;
    totalSteps: number;
    currentStep: number;
    dotClick: (step: number) => void;




}
export const Card: React.FC<CardProps> = ({ title, description, bgColor, imageUrl, nextStep, backStep, showButtons, totalSteps, currentStep, dotClick }) => {
    
    
    const [animationState, setAnimationState] = useState<'fade-in' | 'fade-out'>('fade-in');

    useEffect(() => {
        setAnimationState('fade-out');

        const timeout = setTimeout(() => {
            setAnimationState('fade-in');
        }, 1500); 

        return () => clearTimeout(timeout); 
    }, [imageUrl]);



    
    return (
        <motion.div className={`card ${animationState}`}
        >
            <div className='card-bg'
                style={{ backgroundColor: bgColor || "#f0f0f0" }}
            ></div>
            {imageUrl && ( 
                <img 
                    className='card-image'
                    src={imageUrl}
                    alt={title}
                />
            )}

            <div className='card-text'>
                <h3>{title}</h3></div>
            <div className='text-description'><p>{description}</p></div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: "50px", margin: "0" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginRight: "auto" }}>
                    <Indicator totalSteps={totalSteps} currentStep={currentStep} dotClick={dotClick} />
                </div>



                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative", height: "50px", margin: "0", gap: "5px" }}>
                    {showButtons === 1 && (
                        <Button direction="right" action={nextStep} />
                    )}
                    {showButtons === 2 && (
                        <>
                            <Button direction="left" action={backStep} />
                            <Button direction="right" action={nextStep} />
                        </>
                    )}
                    {showButtons === 3 && (
                        <Button direction="left" action={backStep} />

                    )}
                </div>
            </div>
        </motion.div>

    );
};

export default Card
