import React from "react";
import { connect } from "react-redux";
import Spinner from "reactjs-simple-spinner";
import { CharacterItem } from "./CharacterItem";

const CharacterGrid = ({ characters, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Spinner size="big" message="Loading..." />
      ) : (
        <section className="cards">
          {characters.map((character, i) => (
            <CharacterItem character={character} key={character.char_id} />
          ))}
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.AppReducer.characters,
    isLoading: state.AppReducer.isLoading,
  };
};

export default connect(mapStateToProps, null)(CharacterGrid);
