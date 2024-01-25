import logo from './logo.svg';
import './App.css';
import { CardList } from './components/MonsterList/list.component';

function App() {
  const monsters = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  ];
    

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <CardList monsters={monsters}/>
      
    </div>
  );
}

export default App;
