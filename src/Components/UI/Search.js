import React from "react";
import { connect } from "react-redux";
import { fetchSearchDetails, fetchDetails } from "../../state/actions";

const Search = (props) => {
  const onSearchChange = (e) => {
    props.fetchSearchDetails(e.target.value.toLowerCase());
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          onChange={onSearchChange}
        />
      </form>
    </section>
  );
};

export default connect(null, { fetchSearchDetails, fetchDetails })(Search);
