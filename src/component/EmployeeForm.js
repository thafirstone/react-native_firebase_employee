import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, View, StyleSheet } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate, employeeCreate } from './../actions';

class EmployeeForm extends Component {
  state = { }
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Nom"
            placeholder="Jean-Mich"
            value={this.props.name}
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Tél"
            placeholder="06 35 37 15 52"
            value={this.props.phone}
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={(value) => this.props.employeeUpdate({ prop: 'shift', value })}
            style={styles.writeWhite}
          >
            <Picker.Item label="Lundi" value="Lundi" />
            <Picker.Item label="Mardi" value="Mardi" />
            <Picker.Item label="Mercredi" value="Mercredi" />
            <Picker.Item label="Jeudi" value="Jeudi" />
            <Picker.Item label="Vendredi" value="Vendredi" />
            <Picker.Item label="Samedi" value="Samedi" />
            <Picker.Item label="Dimanche" value="Dimanche" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  writeWhite: {
    flex: 1,
  },
  shift: {
    fontSize: 18,
    paddingLeft: 20,
  },
  cardNoRowGo: {
    flexDirection: 'column',
  },
});

const mapStateToProps = ({ creationForm }) => {
  const { name, phone, shift, uid } = creationForm;
  return { name, phone, shift, uid };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate,
})(EmployeeForm);
