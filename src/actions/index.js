export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then(data => data['messages']);

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => data['messages']);

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

