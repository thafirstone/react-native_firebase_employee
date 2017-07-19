import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeView, employeeUpdate, employeeSave, employeeDelete } from './../actions';

class EmployeeEdit extends Component {
  state = { showModal: false }
  componentWillMount() {
    // if (this.props.employee) {
    //   this.props.employeeView(this.props.employee);
    // }
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift, uid } = this.props;
    this.props.employeeSave({ name, phone, shift, uid });
    // console.log({ name, phone, shift, uid });
  }
  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Vous travaillez le ${shift}`);
  }
  onShowModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  fireEmployee() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Enregistrer
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.onTextPress()}>
            Envoyer message
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.onShowModal()}>
            Licencier
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onDecline={() => this.onShowModal()}
          onAccept={() => this.fireEmployee()}
        >
        Voulez-vous vraiment supprimer cet employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ creationForm }) => {
  const { name, phone, shift, uid } = creationForm;
  return { name, phone, shift, uid };
};

export default connect(mapStateToProps, { employeeView, employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);

