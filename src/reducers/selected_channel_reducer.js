// const SelectedChannelReducer = (state, action) => {
//   if (state === undefined) {
//     return 'general'
//   }

//   if (action.type === 'LIST_USER') {
//     return action.payload;
//   } else {
//     return state;
//   }

// }

// export default SelectedChannelReducer;

export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}
