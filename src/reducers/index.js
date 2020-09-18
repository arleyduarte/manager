import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employeesReducer: EmployeReducer,
});
