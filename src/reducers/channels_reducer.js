const ChannelsReducer = (state, action) => {
  if (state === undefined) {
    return [ 'general', 'react', 'paris' ];
  }

  if (action.type === 'LIST_CHANNELS') {
    return action.payload;
  } else {
    return state;
  }

}

export default ChannelsReducer;
