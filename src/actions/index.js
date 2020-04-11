export const LIST_MESSAGES = 'LIST_MESSAGES';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: LIST_MESSAGES,
    payload: promise
  };
}
