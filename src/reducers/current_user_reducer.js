// const CurrentUserReducer = (state, action) => {
//   if (state === undefined) {
//     return `anonymous${Math.floor(10 + (Math.random() * 90))}`;
//   }

//   if (action.type === 'LIST_USER') {
//     return action.payload;
//   } else {
//     return state;
//   }

// }

// export default CurrentUserReducer;

export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}
