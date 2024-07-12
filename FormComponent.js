import React, { useRef } from 'react';

const FormComponent = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered: ${inputRef.current.value}`);
  };

  const handleClear = () => {
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputField">Enter something: </label>
        <input id="inputField" type="text" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default FormComponent;
