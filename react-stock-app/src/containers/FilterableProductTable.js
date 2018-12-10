import React, { Component, Fragment } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import ProductTable from '../containers/ProductTable';

class FilterableProductTable extends Component {

    render() {
        return (
            <Fragment>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </Fragment>
        )
    }
}

export default FilterableProductTable;