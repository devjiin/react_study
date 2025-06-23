const Checkbox = ({ labelText, idx }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`inputCheckbox${idx}`}
        className="input__checkbox"
      />
      <label htmlFor={`inputCheckbox${idx}`} className="text__label">
        {labelText}
      </label>
    </>
  );
};

export default Checkbox;
