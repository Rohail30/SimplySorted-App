/* eslint-disable react/jsx-key */
// import React from 'react';
import Create from './Create';
import Card from './Card';

export default function Memos() {
  return (
    <div className="memos">
      <h1>Your Memos!</h1>
      <Create />
      <br />
      <Card />
    </div>
  );
}
