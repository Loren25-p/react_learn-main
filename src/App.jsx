import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import "./styles/main.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    selectedVariant: ''
  });
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <div className={`multi-step-form ${theme}`}>
      {/* Кнопка переключения темы */}
      <button className="theme-toggleBtn" onClick={toggleTheme}>
        {theme === 'light' ? '🌞' : '🌜'}
      </button>

      {/* Шаги формы */}
      {currentStep === 0 && <Welcome onNext={handleNext} onDataChange={handleDataChange} />}
      {currentStep === 1 && <StepOne onNext={handleNext} onBack={handleBack} onDataChange={handleDataChange} />}
      {currentStep === 2 && <StepTwo onNext={handleNext} onBack={handleBack} onDataChange={handleDataChange} />}
      {currentStep === 3 && <StepThree onNext={handleNext} onBack={handleBack} onDataChange={handleDataChange} />}
      {currentStep === 4 && <StepFour onNext={handleNext} onBack={handleBack} onDataChange={handleDataChange} />}
      {currentStep === 5 && <Thanks data={formData} onBack={handleBack} />}
    </div>
  );
};

export default MultiStepForm;
