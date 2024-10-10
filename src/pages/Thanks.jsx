// import React from "react";

// const Thanks = () => {
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="thanks">
//           <img src="./img/bell.png" alt="bell" />
//           <h1>Спасибо за прохождение опроса!</h1>
//           <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
//           <button type="button" id="get-link">
//             Получить ссылку
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Thanks;


import React from "react";

const Thanks = () => {
  const handleGetLink = () => {
    alert("Ссылка для получения скидки отправлена на ваш email!"); 
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link" onClick={handleGetLink}>
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
