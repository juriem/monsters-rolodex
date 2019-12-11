import React from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({
                monsters: users
            }))
    }

    onChange(e) {
      const value = e.target.value;
      this.setState({
        searchField: value
      })
    }

    render() {

        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
              <SearchBox onChange={this.onChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
