import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardSection} from './common';

const ListItem = ({employee}) => {
  const {name} = employee;
  return (
    <CardSection>
      <Text style={styles.title}>{name}</Text>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

export default ListItem;
