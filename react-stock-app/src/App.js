import React, { Component } from "react";

import FilterableProductTable from "./containers/FilterableProductTable";
import { json } from './json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FilterableProductTable products={json}/>
      </div>
    );
  }
}

export default App;
