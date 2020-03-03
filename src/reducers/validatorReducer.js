import { CHANGE_CARD_NUM, RESET_VALUES, SET_CARD_TYPE, SET_CARD_ACTIVE, SET_MULTI_STATUS, SET_CARD_NON_ACTIVE, SET_VALID_STATUS } from '../actions'

const initialState = {
  maxLength: 16,
  cardNumber: '',
  placeholder: 'Enter credit card number',
  activeVisa: false,
  activeMastercard: false,
  activeDiscover: false,
  activeAmex: false,
  type: '',
  valid: '',
  error: {},
}

const validatorReducer = (state = initialState, action) => {
  switch(action.type){

    case CHANGE_CARD_NUM:
      return Object.assign({}, state, {
        cardNumber: action.payload
      })
    case RESET_VALUES:
      return Object.assign({}, state, {
        cardNumber: '',
        valid: '',
      })
    case SET_CARD_TYPE:
      return Object.assign({}, state, {
        type: action.payload,
      })
    case SET_CARD_NON_ACTIVE:
      return Object.assign({}, state, {
        ['active' + action.payload]: false,
        type: '',
        valid: '',
     })
    case SET_CARD_ACTIVE:
      return Object.assign({}, state, {
        ['active' + action.payload]: true,
     })
     case SET_MULTI_STATUS:
       return Object.assign({}, state, {
         activeVisa: false,
         activeMastercard: false,
         activeDiscover: false,
         activeAmex: false,
         ['active' + action.payload]: true,
         valid: '',
      })
      case SET_VALID_STATUS:
        return Object.assign({}, state, {
            valid: action.payload,
       })
    default:
        return state;
  }
}

export default validatorReducer;
