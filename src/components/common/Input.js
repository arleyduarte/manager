import React, {Component, useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    padding: 5,
    height: 40,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },

  label: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
});
export {Input};
