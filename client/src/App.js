import { React, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios.post('http://localhost:3001/login', {
      user,
      password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <h1> CRUD APP </h1>
      <div className='Form'>
        <label>Name: </label>
    <input type="text" name='user' onChange={ (e)=> setUser(e.target.value) }/>
    <label>Password: </label>
    <input type="text"  name='password' onChange={ (e) => setPassword(e.target.value)}/>
    <button type='button' onClick={login}> Submit </button>
    </div>
    </div>
  );
}

export default App;
