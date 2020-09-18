import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      console.log('Employee Reducer EMPLOYEE_UPDATE', action.payload);

      return {...state, [action.payload.prop]: action.payload.value};

    case EMPLOYEE_CREATE:
      console.log('Employee Reducer EMPLOYEE_CREATE', action.payload);

      return INITIAL_STATE;

    default:
      return state;
  }
};
