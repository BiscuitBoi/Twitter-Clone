import React, {useState} from 'react';
import './index.css';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";



function Home(){
  const [name, SetName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleName = (e) => {
    SetName(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    SetName(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    SetName(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (name == '' || email == '' || password == '') {
    setError(true);
  } else {
      setSubmitted(true);
      setError(false);
    }
  };
  return(
  <div className="mid">
  <h1>Home Page</h1>
<form>
<label>Name</label>
<input onChange={handleName} value={name} type="text" />

<label>Email</label>
<input onChange={handleEmail} value={name} type="email" />

<label>Password</label>
<input onChange={handlePassword} value={name} type="password" />

<button onClick={handleSubmit} type="submit">Submit </button>
</form>

  </div>
);
}
  export default Home;
