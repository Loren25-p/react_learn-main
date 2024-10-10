const AppButton = ({ buttonText, isDisabled, onClick }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};

export default AppButton;
