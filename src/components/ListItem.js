import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';
const ListItem = ({employee}) => {
  const onPressItem = () => {
    console.log('ListItem onPressItem', employee);
    Actions.editEmployee({employee: employee});
  };

  const {name} = employee;
  return (
    <TouchableOpacity onPress={() => onPressItem()}>
      <CardSection>
        <Text style={styles.title}>{name}</Text>
      </CardSection>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

export default ListItem;
