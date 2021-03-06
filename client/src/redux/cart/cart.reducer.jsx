import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART, EMPTY_CART } from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload)
      }
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
    case EMPTY_CART:
      return {
        ...state,
        items: []
      }
    default:
      return state
  }
}

export default cartReducer