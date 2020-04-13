import { FETCH_MESSAGES } from '../actions'
import { CREATE_MESSAGE } from '../actions'

// const messagesReducer = (state, action) => {
//   if (state === undefined) {
//     return [];
//   }

//   if (action.type === FETCH_MESSAGES ) {
//     return action.payload;
//   } else {
//     return state;
//   }

//   if (action.type === CREATE_MESSAGE ) {
//     return action.payload;
//   } else {
//     return state;
//   }
// }

// export default messagesReducer;

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
