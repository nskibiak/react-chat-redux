// const ChannelsReducer = (state, action) => {
//   if (state === undefined) {
//     return state;
//   }

//   if (action.type === 'LIST_CHANNELS') {
//     return action.payload;
//   } else {
//     return state;
//   }

// }

// export default ChannelsReducer;

export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}
