import React, {useState} from 'react';

import './App.css';

function App() {

  const [team, setTeam] = useState([]); 
   
  return (
    <div className="App">
      {team.map((element) => {
        return(
          <div className="Team-Area">
            <h2>{element.name}</h2>
            <h3>{element.email}</h3>
            <p>{element.role}</p>
            </div>
        )
      })}
      </div>
  );
}

export default App; 
