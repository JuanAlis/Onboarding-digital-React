import { useState } from 'react';
import './App.css';
import Card from './Componentes/Card/Card';
import { AnimatePresence } from 'framer-motion';



const App: React.FC = () => {

  const tutorialData = [
    {
      title: `Dedica moltes hores`,
      description: `Un mínim de 30 hores a la setmana. Si no en tens prou, hauria de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.`,
      bgColor: `#48A6A7`,
      image: `/time_managment.svg`,
      showButtons: 1,
    },
    {
      title: `Programa projectes propis`, 
      description: ` Més val 0 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.`,
      bgColor: `#D3D4D9`,
      image: `/programming.svg`,
      showButtons: 2,


    },
    {
      title: `Procura descansar`,
      description: `Descansar bé i desconnectar són vitals. D’aquesta manera reduiràs l’estrès i l’ansietat: Milloraràs la teva concentració i consolidaràs el teu aprenentatge.`,
      bgColor: `#FFD167`,
      image: `/meditation.svg`,
      showButtons: 3,

    }
  ];

  const [step, setStep] = useState(0)
  


const nextStep =() => {
    if (step < 2) {
      setStep(prev => prev + 1);
    }
  };


const backStep = () => {
    if (step > 0) {
      setStep(actual => actual - 1)
    }
  }

  const dotClick = (step :number)=>{
    setStep(step);
  }


  const currentCardData = tutorialData[step]


  return (
    <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, height: `100vh`, gap: "16px", width: "100% " }}>
      
      <AnimatePresence mode="wait">
      <Card
        title={currentCardData.title}
        description={currentCardData.description}
        bgColor={currentCardData.bgColor}
        imageUrl={currentCardData.image}
        nextStep={nextStep}
        backStep={backStep}
        showButtons={currentCardData.showButtons}
        totalSteps={tutorialData.length}
        currentStep={step}
        dotClick={dotClick}
      />
      </AnimatePresence>


    </div>



  );



};

  
export default App
