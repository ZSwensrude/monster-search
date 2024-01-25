import logo from './logo.svg';
import './App.css';
import { CardList } from './components/MonsterList/list.component';
import { useState, useEffect } from 'react';

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect( () => {
    const fetchMonsters = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const monsters = await response.json();
      console.log(monsters);
      setMonsters(monsters);
    }
    fetchMonsters();
  }, []);


  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <CardList monsters={monsters}/>
      
    </div>
  );
}

export default App;
