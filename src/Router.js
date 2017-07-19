import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

export default class RouterComponent extends Component {
  state = { }

  goToEmployeeCreate() {
    Actions.employeeCreate();
  }
  render() {
    return (
      <Router sceneStyle={styles.scene}>
        <Scene key="root">

          <Scene initial key="login" component={LoginForm} title="Please Login" />

          <Scene
            onRight={() => this.goToEmployeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            type="reset"
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit employee" />

        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  scene: { paddingTop: 65 },
});

