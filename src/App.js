import React from 'react';
import './App.css';
import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      serachField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  handleChange = (e) => {
    this.setState({serachField: e.target.value})
  }

  render() {
    const { monsters, serachField } = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(serachField.toLocaleLowerCase())  
    )
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='Search Monster'
          handleChange = {this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
