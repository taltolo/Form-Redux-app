import {ADD_COUNTER} from './type';

export const addToCounter = counter => ({
  type: ADD_COUNTER,
  data: counter,
});
