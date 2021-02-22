import React from 'react'
import './Extra.css';
import './App.css';
import Extra from "./Extra"

/*
const Hello = () => "Hello World"
export default Hello;
*/

function App({name,age}) {

  let updatedAge = age-20;

  return <div>
    <br/>
    <br/>
    <center className="customize">Hello : <strong>{name}</strong> Age = {updatedAge-10}</center>
    <br />
    <ol>
      <li className="list">Matricualtion : St.Patrick's high School</li>
      <li className="list">Intermidiate : Govt.Islamia Science College</li>
      <li className="list">Bachelor : Sir Syed University Of Engineering And Technology</li>
    </ol>
    </div>
}

export default App;


//<Extra fname = {name}></Extra>