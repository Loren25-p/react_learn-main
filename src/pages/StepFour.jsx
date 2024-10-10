import React, { useState } from "react";

const StepFour = ({ onNext }) => {
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
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>4. Хотите записаться прямо сейчас и получить скидку 15%?</h2>
            <ul className="level-variants">
              {[1, 2, 3, 4, 5].map((num) => (
                <li className="variant-wrapper" key={num}>
                  <input
                    required
                    type="radio"
                    name="variant"
                    id={`variant-${num}`}
                    onChange={handleVariantChange}
                  />
                  <label htmlFor={`variant-${num}`}>{num}</label>
                </li>
              ))}
            </ul>
            <button class="my_button" type="button" onClick={handleNextClick} disabled={!selectedVariant}>
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
