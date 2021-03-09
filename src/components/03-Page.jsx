import React from 'react'
import { searchItemAction, getProductsAction } from '../actions';
import { connect } from 'react-redux'

class _SearchC extends React.Component {

    state = {
        name: ''
    }

    insertName = (e) => {
        const name = e.target.value;
        this.setState({
            name: name
        })
    }

    search = () => {
        const { name } = this.state;
        const { searchItem } = this.props
        console.log(name)
        searchItem(name);
    }

    reset = () => {
     
        const { getProduct } = this.props
        getProduct();
    }


    render() {
        return (
            <div>
                <h2>search</h2>
                <input type="text" onChange={this.insertName} />
                <button type="button" onClick={this.search}>search</button>
                <button type="button" onClick={this.reset}>reset</button>
            </div>
        )
    }
}



const mapDispatchToProps = {
    searchItem: searchItemAction,
    getProduct:getProductsAction
}

export const SearchC = connect(undefined, mapDispatchToProps)(_SearchC)