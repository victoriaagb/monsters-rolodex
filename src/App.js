//import { Component } from "react";

import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState("");

  console.log("render app");

  useEffect(() => {
    // console.log("useEffect Retrieve Monsters");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        // set state will trigger a rerender to show updates
        setMonsters(users)
      );
  }, []);

  useEffect(() => {
    // console.log("useEffect Filter Monsters");
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  /*   const onStringChange = (event) => {
    const stringFieldString = event.target.value.toLowerCase();
    setStringField(stringFieldString);
  }; */

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monster-search-box"
      />
      {/*       <SearchBox
        onChangeHandler={onStringChange}
        placeholder="Search String"
        className="monster-search-box"
      /> */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/* 

class App extends Component {
  constructor() {
    super();

    console.log("constructor");

    this.state = {
      // always keep the original data extracted
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        // set state will trigger a rerender to show updates
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // function to run after state has changed
            console.log(this.state);
          }
        )
      );
  }

  // optimization of extracting a function so it doesn't get generated every render
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");

    // optimization of using local variables and avoiding this.state
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="monster-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
} */

export default App;
