import React from "react";
import "./App.css";
import { Header } from "./Components/UI/Header";
import { connect } from "react-redux";
import { fetchDetails } from "./state/actions";
import CharacterGrid from "./Components/Characters/CharacterGrid";
import Search from "./Components/UI/Search";

class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchDetails();
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <CharacterGrid />
      </div>
    );
  }
}

export default connect(null, { fetchDetails })(App);
