import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    console.log('EmployeeList componentWillMount ');
    this.props.employeesFetch();
  }

  componentWillReceiveProps(nextProps) {
    console.log('EmployeeList componentWillReceiveProps ', nextProps.employees);
  }

  renderItem({item}) {
    return <ListItem employee={item}></ListItem>;
  }

  render() {
    const employees = this.props.employees;
    console.log('render', employees);

    return (
      <View>
        <FlatList
          data={employees}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item) => item.uid}></FlatList>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps state', state.employeesReducer);

  const employees = _.map(state.employeesReducer, (val, uid) => {
    return {...val, uid};
  });

  //const employees = {employees: []};
  console.log('mapStateToProps', employees);
  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
