import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  state = { }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }
    return (
      <Button onPress={() => this.onButtonPress()}>
                Login
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.globalBackground}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="adresse@mail.fr"
              value={this.props.email}
              // onChangeText={this.onEmailChange.bind(this)}
              onChangeText={(text) => this.onEmailChange(text)}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Mot de passe"
              placeholder="Mot de passe"
              value={this.props.password}
              onChangeText={(text) => this.onPasswordChange(text)}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red',
  },
  globalBackground: {
    backgroundColor: 'white',
  },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser,
})(LoginForm);
