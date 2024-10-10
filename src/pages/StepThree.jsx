import React, { useState } from "react";

const StepThree = ({ onNext }) => {
  const [selectedVariant, setSelectedVariant] = useState("");

  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.id);
  };

  const handleNextClick = () => {
    if (selectedVariant) {
      onNext(); 
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>3. Ваше настроение на сегодня:</h2>
            <ul className="emoji-variants">
              {["laugh", "hearts", "smirk", "fright"].map((emoji, index) => (
                <li className="variant-wrapper" key={index}>
                  <input
                    required
                    type="radio"
                    name="variant"
                    id={`variant-${index + 1}`}
                    onChange={handleVariantChange}
                  />
                  <label htmlFor={`variant-${index + 1}`}>
                    <img src={`./img/${emoji}.png`} alt={emoji} />
                    <p>Ваш ответ {index + 1}</p>
                  </label>
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleNextClick} disabled={!selectedVariant}>
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
