import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greeting: 'Hi',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GREETING':
      return {
        ...state,
        greeting: action.payload,
      };
    case 'GET_GREETING_SUCCESS':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
