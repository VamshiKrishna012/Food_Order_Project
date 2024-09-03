import { ADD_TO_CART, CLEAR_CART, FETCH_CART, REMOVE_ITEM_CART, UPDATE_CART_ITEM } from "../constants/cartConstant";

export const cartReducer = (
    state = { cartItems: [], restaurant: [] },
    action
) => {
    switch (action.type) {
        case ADD_TO_CART: 
            return {
                ...state,
                restaurant: action.payload.restaurant,
                cartItems: action.payload.items,
            };
        case UPDATE_CART_ITEM:
            return {
                ...state,
                cartItems: action.payload.items,
            };
        case FETCH_CART:
            return {
                ...state,
                restaurant: action.payload.restaurant,
                cartItems: action.payload.items,
            };
        case REMOVE_ITEM_CART:
            if (action.payload.cart === undefined) {
                return {
                    ...state,
                    cartItems: [],
                };
            } else {
                return {
                    ...state,
                    cartItems: action.payload.cart.items,
                };
            }
        case CLEAR_CART:
            return { ...state, cartItems: [] };
            
        default:
            return state;
    }
};


// export const cartReducer = (
//     state = { cartItems: [], restaurant: [] },
//     action
// ) => {
//     switch (action.type) {
//         case ADD_TO_CART: 
//             return {
//                 ...state,
//                 restaurant: action.payload.restaurant || state.restaurant,
//                 cartItems: action.payload.items || state.cartItems,
//             };
//         case UPDATE_CART_ITEM:
//             return {
//                 ...state,
//                 cartItems: action.payload.items || state.cartItems,
//             };
//         case FETCH_CART:
//             return {
//                 ...state,
//                 restaurant: action.payload.restaurant || state.restaurant,
//                 cartItems: action.payload.items || state.cartItems,
//             };
//         case REMOVE_ITEM_CART:
//             if (action.payload && action.payload.cart && Array.isArray(action.payload.cart.items)) {
//                 return {
//                     ...state,
//                     cartItems: action.payload.cart.items,
//                 };
//             } else {
//                 return {
//                     ...state,
//                     cartItems: [],
//                 };
//             }
//         case CLEAR_CART:
//             return { ...state, cartItems: [] };
//         default:
//             return state;
//     }
// };