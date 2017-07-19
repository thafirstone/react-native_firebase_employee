import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {}}
    transparent
    visible={visible}
  >
    <View style={styles.containerStyle}>
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>
          {children}
        </Text>
      </CardSection>
      <CardSection>
        <Button onPress={onAccept}>Oui</Button>
        <Button onPress={onDecline}>Non</Button>
      </CardSection>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});

export { Confirm };
