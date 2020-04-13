export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

