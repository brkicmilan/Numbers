export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_NUMBERS':
      return { ...state, list: action.payload }
    case 'GET_NUMBER':
      return {
        ...state,
        number: action.payload
      }
    case 'CLEAR_NUMBER':
      return { ...state, number: action.payload }
    case 'UPDATE_BOOK':
      return {
        ...state,
        updateNumber: action.payload.success,
        number: action.payload.doc
      }
    case 'ADD_NUMBER':
      return { ...state, newnumber: action.payload }
    case 'CLEAR_NEWNUMBER':
      return { ...state, newnumber: action.payload }
    case 'DELETE_BOOK':
      return { ...state, postDeleted: action.payload }
    case 'CLEAR_NUMBERS':
      return {
        ...state,
        updateNumber: action.payload.updateBook,
        number: action.payload.number,
        postDeleted: action.payload.postDeleted
      }
    default:
      return state;
  }
}  