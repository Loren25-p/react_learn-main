import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { AppLabel } from "../components/AppLable.jsx"; 
import AppButton from "../components/AppButton";

const Welcome = ({ onNext, onDataChange }) => {
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = nameRegex.test(username);
    const isPhoneValid = phoneRegex.test(phone);

    setNameError(!isNameValid);
    setPhoneError(!isPhoneValid);

    if (isNameValid && isPhoneValid) {
      console.log("Форма валидна. Переход к следующему шагу...");
      onDataChange({ username, phone });
      onNext(); 
    } else {
      console.log("Форма не валидна. Проверьте вводимые данные.");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setNameError(!nameRegex.test(value));
    onDataChange({ username: value }); // Сохраняем имя при изменении
    console.log("Изменение имени:", value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError(!phoneRegex.test(value));
    onDataChange({ phone: value }); // Сохраняем номер при изменении
    console.log("Изменение номера:", value);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h1" headerText="Салам" />
          <form className="welcome__form" onSubmit={handleSubmit}>
            <AppLabel
              labelText="Ваше имя"
              hasError={nameError}
              errorText="Введите имя в правильном формате (1-20 букв)"
              id="username"
              isRequired={true}
              inputPlaceholder="Имя"
              inputType="text"
              labelValue={username}
              labelChange={handleUsernameChange} 
            />
            <AppLabel
              labelText="Ваш номер"
              errorText="Введите номер в правильном формате"
              id="phone"
              hasError={phoneError}
              isRequired={true}
              inputPlaceholder={"+998 9- --- -- --"}
              inputType="tel"
              labelValue={phone}
              labelChange={handlePhoneChange} 
            />
            <AppButton
              buttonText="Далее"
              isDisabled={nameError || phoneError}
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
