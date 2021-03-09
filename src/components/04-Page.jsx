import React from 'react';
import { updateQtyAction, closeUpdateAction } from '../actions';
import { connect } from 'react-redux';

class _Page_4 extends React.Component {
    state = {
        qty: ''
    };
    update = () => {
        const { product_id, update_qty } = this.props;
        const { qty } = this.state;
        console.log(qty)
        update_qty(product_id, qty);
    }

    addNewQty = (e) => {
        const qty = e.target.value;
        this.setState({
            qty: qty
        })
    }

    close = () => {
        const { closeUpdate } = this.props;
        closeUpdate()
    }


    render() {
        return (
            <div>
                <h2>PLS UPDATE STOCK</h2>
                <p>
                    add comments
                </p>
                <input onChange={this.addNewQty} type="text" />
                <button onClick={this.update}> update</button>
                <button onClick={this.close}> close</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product_id: state.product_id,
    
    
})

const mapDispatchToProps = {
    update_qty: updateQtyAction,
    closeUpdate: closeUpdateAction
}

export const Page_4 = connect(mapStateToProps, mapDispatchToProps)(_Page_4)