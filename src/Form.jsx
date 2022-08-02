import { useState } from 'react';

function Form() {
  const [text, setText] = useState('');

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <div>
      <p>{text.length > 0 ? 'Petra album Songs' : 'No songs listed'}</p>
      <p>{text}</p>
      <form autoComplete="off" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onInputChange} />
        <button type="submit">Add Song </button>
      </form>
    </div>
  );
}

export default Form;
