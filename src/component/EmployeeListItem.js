import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

export default class EmployeeListItem extends Component {
  state = { }
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }
  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={() => this.onRowPress()}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});
