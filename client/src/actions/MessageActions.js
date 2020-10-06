/* eslint-disable import/prefer-default-export */
function setMessage(message) {
  return {
    type: 'SET_MESSAGE',
    message,
  };
}

export default {
  setMessage,
};
