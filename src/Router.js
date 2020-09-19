import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            initial></Scene>
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.createEmployee();
            }}
            key="employeeList"
            component={EmployeeList}
            title="EmployeeList"></Scene>

          <Scene
            key="createEmployee"
            component={EmployeeCreate}
            title="Create Employee"></Scene>

          <Scene
            key="editEmployee"
            component={EmployeeEdit}
            title="Edit Employee"></Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
