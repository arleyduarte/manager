import {EMPLOYEE_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      console.log('Employees Reducer EMPLOYEE_FETCH_SUCCESS', action.payload);
      // return {employess: action.payload};
      return action.payload;

    default:
      return state;
  }
};
