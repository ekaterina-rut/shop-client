import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export interface State {
    products: IProduct[] | [];
    msg: string;
    product_id: number | null;
    isUpdateOpen: boolean

}

export interface IProduct {
    id: number,
    name: string,
    price: number,
    manufactory: string,
    qty: number,
    time: Date
}


export const initialState: State = {
    products: [],
    msg: '',
    product_id: null,
    isUpdateOpen: false
}




export interface Action {
    type: string;
    payload: Record<string, any>;
}

export enum Actions {
    GetProducts = 'GET_ALL_PRODUCTS',
    GetGanesByName = 'GET_PRODUCTS_BY_NAME',
    ShowMsg = 'SHOW_MSG',
    OpenUpdate = 'OPEN_UPDATE',
    RefreshProducts = 'REFRESH_PRODUCTS',
    CloseUpdate = 'CLOSE_UPDATE',
    SortProducts = 'SORT_PRODUCTS',
    Search = 'SEARCH'

}

export interface Action {
    type: string;
    payload: Record<string, any>;
}


const reducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case Actions.GetProducts: {
            const { products, msg, comments } = action.payload;
            return {
                ...state,
                products: products,
                msg: msg,

            }
        }

        case Actions.OpenUpdate: {
            const { product_id } = action.payload;
            return {
                ...state,
                isUpdateOpen: true,
                product_id: product_id

            }
        }

        case Actions.RefreshProducts: {
            const { products } = action.payload;
            return {
                ...state,
                isUpdateOpen: false,
                product_id: null,
                products: products
            }
        }

        case Actions.CloseUpdate: {
            return {
                ...state,
                isUpdateOpen: false,
                product_id: null,
            }
        }
        case Actions.SortProducts: {
            const { products, msg } = action.payload;

            return {
                ...state,
                products: products,
                msg: msg
            }
        }

        case Actions.Search: {
            const { products, msg } = action.payload;
            return {
                ...state,
                products: products,
                msg: msg
            }
        }

        default: {
            return state;
        }
  


    }
}


export function createStore() {
    const logger = createLogger();
    const middleware = composeWithDevTools(applyMiddleware(logger, thunk));
    return createReduxStore(reducer, middleware);
}