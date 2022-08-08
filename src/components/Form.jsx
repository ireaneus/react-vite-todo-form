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

export default function Form() {
  const [list, setList] = useState(initialSongs);
  const [song, setSong] = React.useState('');

  function handleChange(event) {
    setSong(event.target.value);
  }

  function handleAdd() {
    const newSong = list.concat({ song, id: uuidv4() });
    setList(newSong);
    setSong('');
    console.log(newSong);
  }

  return (
    <div>
      <AddItem song={song} onChange={handleChange} onAdd={handleAdd} />
      <List list={list} />
    </div>
  );
}

const AddItem = ({ song, onChange, onAdd }) => (
  <div>
    <input type="text" value={song} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.song}</li>
    ))}
  </ul>
);
