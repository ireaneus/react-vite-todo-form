import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialSongs = [
  {
    id: 1,
    song: 'Petra Praise',
  },
  {
    id: 2,
    song: 'The Rock cries out',
  },
];

function Form() {
  const [list, setList] = useState(initialSongs);
  const [song, setSong] = React.useState('');

  function handleChange(event) {
    setSong(event.target.value);
  }

  function handleAdd() {
    const newSong = list.concat({ song, id: uuidv4() });
    setList(newSong);
    setSong('');
  }

  return (
    <div>
      <div>
        <input type="text" value={song} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.song}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
