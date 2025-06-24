const Checkbox = ({ labelText, id, checkedItem, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`inputCheckbox${id}`}
        className="input__checkbox"
        onChange={(e)=>onChange(e.target.checked, id)}
        checked={checkedItem.includes(id)}
      />
      <label htmlFor={`inputCheckbox${id}`} className="text__label">
        {labelText}
      </label>
    </>
  );
};

export default Checkbox;
