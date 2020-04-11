// const MessagesReducer = (state, action) => {
//   if (state === undefined) {
//     return [];
//   }

//   if (action.type === 'LIST_MESSAGES') {
//     return action.payload;
//   } else {
//     return state;
//   }

// }

// export default MessagesReducer;

export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}
