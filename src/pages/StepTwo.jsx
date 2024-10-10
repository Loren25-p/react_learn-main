
  // import React, { useState } from "react";

  // const StepTwo = ({ onNext }) => {
  //   const [selectedVariant, setSelectedVariant] = useState("");

  //   const handleVariantChange = (e) => {
  //     setSelectedVariant(e.target.id);
  //   };

  //   const handleNextClick = () => {
  //     if (selectedVariant) {
  //       onNext(); 
  //     }
  //   };

  //   return (
  //     <div className="container">
  //       <div className="wrapper">
  //         <div className="variants-quiz">
  //           <div className="indicator">
  //             <div className="indicator__text">
  //               <span className="indicator__description">
  //                 Скидка за прохождение опроса:
  //               </span>
  //               <span className="indicator__value">15%</span>
  //             </div>
  //             <div className="indicator__progressbar">
  //               <div className="indicator__unit indicator__unit-1 _active"></div>
  //               <div className="indicator__unit indicator__unit-2"></div>
  //               <div className="indicator__unit indicator__unit-3"></div>
  //               <div className="indicator__unit indicator__unit-4"></div>
  //             </div>
  //           </div>
  //           <div className="question">
  //             <h2>2. Хочешь научиться web-разработке за 4 месяца?</h2>
  //             <ul className="variants">
  //               {["да, очень", "нет, не хочу", "неактуально", "другое.."].map((answer, index) => (
  //                 <li className="variant-wrapper" key={index}>
  //                   <input
  //                     required
  //                     type="radio"
  //                     name="variant"
  //                     id={`variant-${index + 1}`}
  //                     onChange={handleVariantChange}
  //                   />
  //                   <label htmlFor={`variant-${index + 1}`}>{answer}</label>
  //                 </li>
  //               ))}
  //             </ul>
  //             <button type="button" onClick={handleNextClick} disabled={!selectedVariant}>
  //               Далее
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default StepTwo;




  import React, { useState } from "react";

const StepTwo = ({ onNext, onBack, onDataChange }) => {
    const [selectedVariant, setSelectedVariant] = useState("");

    const handleVariantChange = (e) => {
      setSelectedVariant(e.target.id);
      onDataChange({ selectedVariant: e.target.id }); // Сохраняем выбранный вариант при изменении
      console.log("Выбранный вариант:", e.target.id);
    };

    const handleNextClick = () => {
      if (selectedVariant) {
        console.log("Переход к следующему шагу...");
        onNext(); 
      } else {
        console.log("Выберите вариант перед переходом.");
      }
    };

    return (
      <div className="container">
        <div className="wrapper">
          <div className="variants-quiz">
            <div className="indicator">
              <div className="indicator__text">
                <span className="indicator__description">
                  Скидка за прохождение опроса:
                </span>
                <span className="indicator__value">15%</span>
              </div>
              <div className="indicator__progressbar">
                <div className="indicator__unit indicator__unit-1 _active"></div>
                <div className="indicator__unit indicator__unit-2"></div>
                <div className="indicator__unit indicator__unit-3"></div>
                <div className="indicator__unit indicator__unit-4"></div>
              </div>
            </div>
            <div className="question">
              <h2>2. Хочешь научиться web-разработке за 4 месяца?</h2>
              <ul className="variants">
                {["да, очень", "нет, не хочу", "неактуально", "другое.."].map((answer, index) => (
                  <li className="variant-wrapper" key={index}>
                    <input
                      required
                      type="radio"
                      name="variant"
                      id={`variant-${index + 1}`}
                      onChange={handleVariantChange}
                    />
                    <label htmlFor={`variant-${index + 1}`}>{answer}</label>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={handleNextClick} disabled={!selectedVariant}>
                Далее
              </button>
              {/* <button type="button" onClick={onBack}>
                Назад
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default StepTwo;
