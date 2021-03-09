import React from 'react'
import { connect } from 'react-redux'
import { Card } from './05-Card'
import { getProductsAction, sortProductsAction } from './../actions'
import { SearchC } from './03-Page';

class _Home_page extends React.Component {
    componentDidMount() {
        const { getProducts } = this.props;
        getProducts();
    }

    sort = () => {
        const { sortProducts } = this.props;
        sortProducts();
    }
    render() {
        const { products } = this.props
        return (
            <div>
                <SearchC/>
                <button onClick={this.sort}>sort by units in stock</button>
                <h2>home page</h2>
                {products.map((product, i) => <Card key={i} {...product} />)}

            </div>
        )
    }
}

const mapDispatchToProps = {
    getProducts: getProductsAction,
    sortProducts: sortProductsAction

}

const mapDispatchToSate = (state) => ({
    products: state.products,
})

export const Home_page = connect(mapDispatchToSate, mapDispatchToProps)(_Home_page)