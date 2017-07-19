import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeCreate, employeeCreateDefaultInit } from './../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  state = { }

  componentWillMount() {
    this.props.employeeCreateDefaultInit();
  }
  // onChangeGlobal(a) {
  //   this.props.employeeUpdate({ prop: a.prop, value: a.value });
  // }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Lundi' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
          Créer
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ creationForm }) => {
  const { name, phone, shift } = creationForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeCreate, employeeCreateDefaultInit,
})(EmployeeCreate);

