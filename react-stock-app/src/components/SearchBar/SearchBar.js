import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { filterText, inStockOnly, filterTextHandler, inStockOnlyHandler } = this.props;
    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={filterTextHandler}/>
        <p>
          <input type="checkbox" checked={inStockOnly} onChange={inStockOnlyHandler}/>
          Only show produtcs in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
