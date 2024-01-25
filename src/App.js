import logo from './logo.svg';
import './App.css';
import { CardList } from './components/MonsterList/list.component';
import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar/searchBar.component';
import axios from 'axios';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect( () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const data = {};
    axios.get(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then(({data}) => { 
      console.log(data);
      setMonsters(data);
    });
  }, []);

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = monsters
    } else {
      filtered = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredMonsters(filtered);
  }, [monsters, searchInput]);
    
  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  


  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar 
        placeholder={"Search Monster"} 
        handleInput={handleInput} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
