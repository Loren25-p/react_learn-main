import React, { useState } from "react";

const StepOne = ({ onNext }) => {
    const [answer, setAnswer] = useState("");
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
        if (e.target.value) {
            setErrorMessageVisible(false); // Убираем сообщение об ошибке при вводе
        }
    };

    const handleNextClick = () => {
        if (answer) {
            onNext();
        } else {
            setErrorMessageVisible(true); // Показываем сообщение об ошибке, если ответ пустой
        }
    };

    return (
        <div className="container">
            <div className="wrapper">
                <div className="single-input-quiz">
                    <div className="indicator">
                        <div className="indicator__text">
                            <span className="indicator__description">
                                Скидка за прохождение опроса:
                            </span>
                            <span className="indicator__value">15%</span>
                        </div>
                        <div className="indicator__progressbar">
                            <div className="indicator__unit indicator__unit-1"></div>
                            <div className="indicator__unit indicator__unit-2"></div>
                            <div className="indicator__unit indicator__unit-3"></div>
                            <div className="indicator__unit indicator__unit-4"></div>
                        </div>
                    </div>
                    <div className="question">
                        <h2>1. Назовите ваш любимый учебный центр по веб-разработке в Ташкенте</h2>
                        <label className="input-wrapper">
                            <input
                                required
                                type="text"
                                name="answer"
                                placeholder="Ваш ответ"
                                value={answer}
                                onChange={handleInputChange}
                            />
                            <span id="error-message" className={errorMessageVisible ? 'error-visible' : ''}>
                                Пожалуйста, введите ваш ответ.
                            </span>
                        </label>
                        <button type="button" onClick={handleNextClick} disabled={!answer}>
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepOne;
