import { GET_GITHUB } from '../types';

const initialState = {
  repos: [],
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GITHUB:
      return {
        ...state,
        repos: payload,
      };
    default:
      return state;
  }
}
