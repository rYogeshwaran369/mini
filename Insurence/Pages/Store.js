import { createStore } from 'redux';

const reducer = (state = false, action) => {
  switch (action.type) {
    case 'Login':
      return true;
    case 'Logout':
      return false;
    default:
      return state;
  }
};

const Store = createStore(reducer);

export default Store;
