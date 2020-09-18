import React, {Component} from 'react';
import {Picker} from '@react-native-community/picker';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Text, StyleSheet} from 'react-native';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    console.log('onButtonPress', name);
    //Default value
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jame"
            onChangeText={(text) =>
              this.props.employeeUpdate({prop: 'name', value: text})
            }
            value={this.props.name}></Input>
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555"
            value={this.props.phone}
            onChangeText={(text) =>
              this.props.employeeUpdate({prop: 'phone', value: text})
            }></Input>
        </CardSection>

        <CardSection>
          <Text style={styles.pickerText}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={(day) =>
              this.props.employeeUpdate({prop: 'shift', value: day})
            }>
            <Picker.Item label="Monday" value="Monday"></Picker.Item>
            <Picker.Item label="Tuesday" value="tuesday"></Picker.Item>
            <Picker.Item label="Wednesday" value="wednesday"></Picker.Item>
          </Picker>
        </CardSection>
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
