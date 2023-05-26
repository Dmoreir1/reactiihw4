import './App.css';
import { useState } from 'react';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNameChange1 = (event) => {
    setFirstName(event.target.value);
  };

  const handleNameChange2 = (event) => {
    setLastName(event.target.value);
  };

  const handleClick = () => {
    alert(`YO ${firstName} ${lastName}!!`);
  };

  return (
    <div>
        First:
        <input
          type="text"
          value={firstName}
          onChange={handleNameChange1}
        />
        Last:
        <input
          type="text"
          value={lastName}
          onChange={handleNameChange2}
        />
      <button onClick={handleClick}>Greet Me!!!</button>
    </div>
  );
}

