import React, {useState} from 'react';

import './App.css';
import Form from "./Form.js"; 

function App() {

  const [team, setTeam] = useState([
    {
      name: "Laura Theimer",
      email: "theimer.laura@gmail.com",
      role: "Full Stack Student at Lambda School, mother, artist, coffee drinker, rabbit obessed."
    }
  ]); 
   
  const addMember = personInfo => {
    const newMember = {
      name: personInfo.name,
      email: personInfo.email,
      role: personInfo.role
    }; 

    setTeam([...team, newMember]); 
  }; 

  return (
    <div className="App">
      <h1> Laura's Team </h1>
      {team.map((element) => {
        return(
          <div className="Team-Area">
            <h2>{element.name}</h2>
            <h3>{element.email}</h3>
            <p>{element.role}</p>
            </div>
        )
      })}

      <Form addMember={addMember} team={team} />

      </div>
  );
}

export default App; 
