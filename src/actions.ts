
import { Dispatch } from "redux";
import { Actions, Action } from './redux/store';
import moment from 'moment';




import axios from 'axios';

export function getProductsAction() {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.get<any>(`http://localhost:3000/products`);
            const products = response.data.products;
            const msg = response.data.msg;
            console.log(response.data);
            dispatch({
                type: Actions.GetProducts,
                payload: {
                    products: products,
                    msg: msg
                }
            })

        }
        catch (err) {
            console.log(err)
            dispatch({
                type: Actions.ShowMsg,
                payload: {
                    msg: 'something is wrong'
                }
            })
        };

    }
}

export function openUpdateAction(id: number) {
    console.log(id)
    return (dispatch: Dispatch) => {
        dispatch({
            type: Actions.OpenUpdate,
            payload: {
                product_id: id
            }
        })
    }
}

export function updateQtyAction(id: number, qty: string) {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.put<any>(
                `http://localhost:3000/products/${id}/units`,
                {
                    qty: qty
                }
            );
            const products = response.data.products;
            const msg = response.data.msg;
            console.log(response.data);
            dispatch({
                type: Actions.RefreshProducts,
                payload: {
                    products: products,
                    msg: msg,
                }
            })
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: Actions.ShowMsg,
                payload: {
                    msg: 'something is wrong'
                }
            })
        };

    }
}

export function closeUpdateAction() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: Actions.CloseUpdate,
            payload: {}
        })
    }
}

export function sortProductsAction() {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.get<any>("http://localhost:3000/products_by_count");
            const products = response.data.products;
            const msg = response.data.msg;
            console.log(response.data);
            console.log("here");

            dispatch({
                type: Actions.SortProducts,
                payload: {
                    products: products,
                    msg: msg
                }
            })

        }
        catch (err) {
            console.log(err)
            dispatch({
                type: Actions.ShowMsg,
                payload: {
                    msg: 'something is wrong'
                }
            })
        };

    }
}

export function searchItemAction(name: string) {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.get<any>(`http://localhost:3000/${name}`);
            const products = response.data.product;
            const msg = response.data.msg;
            console.log(response.data);
            console.log("here");

            dispatch({
                type: Actions.Search,
                payload: {
                    products: products,
                    msg: msg
                }
            })

        }
        catch (err) {
            console.log(err)
            dispatch({
                type: Actions.ShowMsg,
                payload: {
                    msg: 'something is wrong'
                }
            })
        };

    }
}





