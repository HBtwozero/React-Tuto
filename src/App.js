import React,{ Component }  from 'react';

import './App.css';
// import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{

  constructor(){
    super()
    //super gives us access to this.state
    this.state ={
      monsters:  [],
      searchField:  ''
    //set state let us modified state entry
  }

  //this.handleChange = this.handleChange.bind(this)
}

  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
  }

  handleChange = (e)=> {
    this.setState({searchField: e.target.value})
  }

  render() {

    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
     return(
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder ='Search Monsters'
      handleChange ={this.handleChange}
      />
      <CardList monsters={filterMonsters}></CardList>
     
    </div>
  );
  }
   
}

export default App;
