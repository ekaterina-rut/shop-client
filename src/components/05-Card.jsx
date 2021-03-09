import React from 'react';
import { connect } from 'react-redux'
import './05-Card.css'
import { openUpdateAction } from '../actions';


export class _Card extends React.Component {

    btn_click = () => {
        const { id, openUpdate } = this.props;
        openUpdate(id);
    }

    render() {
        const { id, name, price, manufacturer, qty, update_date } = this.props
        return (
            <div onClick={this.pickGame} className="card">
                <h2>product name: {name}</h2>
                <h2>product price {price}</h2>
                <h2>manufacturer {manufacturer}</h2>
                <h2>stock {qty}</h2>
                <h2>last qty update {update_date}</h2>

                <button onClick={this.btn_click}>update stock</button>

            </div>
        )
    }
}

const mapDispatchToProps = {

    openUpdate: openUpdateAction
}


export const Card = connect(undefined, mapDispatchToProps)(_Card)