import {ADD_COUNTER} from '../Actions/type';

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      console.log('reducer ');
      return {
        ...state,
        counter: action.data,
      };
    default:
      return state;
  }
}
