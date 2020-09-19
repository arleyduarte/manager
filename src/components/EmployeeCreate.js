import React, {Component} from 'react';
import {Picker} from '@react-native-community/picker';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Text, StyleSheet} from 'react-native';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    console.log('onButtonPress', name);
    //Default value
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  render() {
    console.log('EmployeeCreate render', this.props.employee);

    return (
      <Card>
        <EmployeeForm {...this.props}></EmployeeForm>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Crate</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerText: {
    fontSize: 20,
  },
  container: {
    flexDirection: 'row',
  },
});
const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(
  EmployeeCreate,
);
