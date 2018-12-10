import React, { Component, Fragment } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import ProductTable from "../containers/ProductTable";

class FilterableProductTable extends Component {
  state = {
    filterText: "",
    inStockOnly: false
  };
  filterTextHandler = e => {
    this.setState({ filterText: e.target.value });
  };
  inStockOnlyHandler = () => {
      this.setState({inStockOnly: !this.state.inStockOnly})
  }
  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;
    return (
      <Fragment>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          filterTextHandler={this.filterTextHandler}
          inStockOnlyHandler={this.inStockOnlyHandler}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </Fragment>
    );
  }
}

export default FilterableProductTable;
