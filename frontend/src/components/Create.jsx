// import React from 'react'

import { useState } from 'react';
import axios from 'axios';
import { BsPlusSquare } from 'react-icons/bs';

function Create() {
  console.log(location.pathname);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(1);
  const handleAdd = () => {
    axios
      .post('http://localhost:3001/add', {
        title: title,
        priority: priority,
      })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Write Memo here"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div className="colorSelect">
        <label htmlFor="colorSelect">Set Priority:</label>
        <select
          id="colorSelect"
          name="colors"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value={1}>Red</option>
          <option value={2}>Purple</option>
          <option value={3}>Blue</option>
          <option value={4}>Yellow</option>
          <option value={5}>Green</option>
        </select>
      </div>
      <button type="button" onClick={handleAdd}>
        <BsPlusSquare className="plusSign" />
      </button>
    </div>
  );
}

export default Create;
