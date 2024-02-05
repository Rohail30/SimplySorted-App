/* eslint-disable react/jsx-key */
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import './App.css';

export default function Card() {
  const [todos, setTodos] = useState([]);
  //   const [date, setDate] = useState('');
  //   const [title, setTitle] = useState('');
  //   const [memo, setMemo] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/get')
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    // Find the selected memo based on its ID
    const selectedMemo = todos.find((todo) => todo._id === id);

    // Display a prompt to edit the memo
    const updatedMemo = prompt('Edit Memo:', selectedMemo.memo);

    // Update the server with the new memo content
    if (updatedMemo !== null) {
      axios
        .put(`http://localhost:3001/update/${id}`, {
          memo: updatedMemo,
        })
        .then((result) => {
          // You might not need to reload the page, consider updating the UI without a reload
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:3001/delete/' + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      {todos.length === 0 ? (
        <p className="empty-text">No memos yet! Add one now.</p>
      ) : (
        todos.map((todo) => (
          <div>
            <div className="memo-card">
              <div className="memo-card-options">
                <span className="date">{todo.date.substr(0, 10)}</span>
                <div className="memo-card-optionss">
                  <span className="edit" onClick={() => handleEdit(todo._id)}>
                    Edit
                  </span>
                  <span
                    className="delete"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </span>
                </div>
              </div>
              <div className="memo-title">{todo.title}</div>
              <div className="memo-content">
                <p>{todo.memo}</p>
              </div>
              <div>
                <span className={`priority${todo.priority}`}>----</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
