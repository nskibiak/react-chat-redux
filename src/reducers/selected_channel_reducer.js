// const SelectedChannelReducer = (state, action) => {
//   if (state === undefined) {
//     return state
//   }

//   // if (action.type === 'LIST_USER') {
//   //   return action.payload;
//   // } else {
//   //   return state;
//   // }

// }

// export default SelectedChannelReducer;

import { CHANGE_CHANNEL } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case CHANGE_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}
