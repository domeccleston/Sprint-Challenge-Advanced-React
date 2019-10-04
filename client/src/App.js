import React, { Component } from "react";
import axios from "axios";
import "./App.scss";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import PlayersTable from "./components/Table";
import DarkTable from "./components/DarkTable"
import 'semantic-ui-css/semantic.min.css'

/* function App() {
  return (
    <div className="App">
      
    </div>
  );
} */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => this.setState({ data: res.data }));
  }
  render() {

    return (
      <div className="home">
        <NavBar />
        <PlayersTable data={this.state.data}/>
      </div>
    );
  }
}

export default App;
