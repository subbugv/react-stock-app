import React, { Component, Fragment } from "react";

import ProductCategoryRow from "../components/ProductTable/ProductCategoryRow";
import ProductRow from "../components/ProductTable/ProductRow";

class ProductTable extends Component {
  render() {
    const { products, filterText, inStockOnly } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) return;
      if (inStockOnly && !product.stocked) return;
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </Fragment>
    );
  }
}

export default ProductTable;
