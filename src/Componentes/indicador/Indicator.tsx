import React from 'react';
import "./indicator.css";
import { motion } from 'framer-motion';


interface IndicatorProps {
    totalSteps: number;
    currentStep: number;
    dotClick: (step: number) => void;
}

const Indicator: React.FC<IndicatorProps> = ({ totalSteps, currentStep, dotClick }) => {
    return (
        <div className='indicator-wrapper'>
            {Array.from({ length: totalSteps}).map((_,index)=>(
                <motion.div
                key={index}
                className={`dot ${index === currentStep ? 'dot-active': ''}`}
                onClick={() => dotClick(index)}></motion.div>
            ))}
        </div>
        
    );
};

export default Indicator;
