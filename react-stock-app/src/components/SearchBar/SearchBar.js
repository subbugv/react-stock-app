import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          Only show produtcs in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
