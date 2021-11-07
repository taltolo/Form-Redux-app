import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button, RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addToCounter} from '../Actions/action';
import Header from './Header';
import FooterScreen from './Footer';

const Form = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState('first');
  const [text, setText] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [hasEmailErrors, setEmailErrors] = React.useState(false);
  const [hasTextErrors, setTextErrors] = React.useState(false);
  const [hasNumberErrors, setNumberErrors] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const theme = {colors: {primary: '#00aaff', error: '#FF0000'}};
  const countrRedux = useSelector(state => state.countReducer.counter);
  console.log(countrRedux);

  function handleOnChangeEmail() {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setEmailErrors(!hasEmailErrors);
      setEmail(email);
    } else {
      if (hasEmailErrors === false) setEmailErrors(!hasEmailErrors);
    }
  }

  //on Submit
  //check filled
  function handlerClick() {
    let flag = true;
    if (text.length > 25 || text.length === 0) {
      if (hasTextErrors === false) setTextErrors(!hasTextErrors);
      flag = false;
    } else {
      if (hasTextErrors === true) setTextErrors(!hasTextErrors);
    }
    if (email.length === 0) {
      if (hasEmailErrors === false) setEmailErrors(!hasEmailErrors);
      flag = false;
    }

    if (number <= 0) {
      if (hasNumberErrors === false) setNumberErrors(!hasNumberErrors);
      flag = false;
    } else {
      if (hasNumberErrors === true) setNumberErrors(!hasNumberErrors);
    }
    if (flag) {
      setCounter(counter + 1);
      dispatch(addToCounter(counter));
    }
  }

  return (
    <>
      <Header />
      <TextInput
        theme={theme}
        mode="outlined"
        label="Enter Text"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.textInput}
        error={hasTextErrors}
      />
      <TextInput
        theme={theme}
        mode="outlined"
        label="Enter Email"
        value={email}
        keyboardType="email-address"
        onChangeText={email => setEmail(email)}
        style={styles.textInput}
        error={hasEmailErrors}
        onChange={handleOnChangeEmail}
      />
      <TextInput
        theme={theme}
        mode="outlined"
        label="Enter Number"
        value={number}
        keyboardType="number-pad"
        onChangeText={number => setNumber(number)}
        style={styles.textInput}
        error={hasNumberErrors}
      />
      <View style={styles.radioButtomView}>
        <View style={styles.radioButtomViewWText}>
          <Text style={styles.textButton}>Optin1</Text>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            style={styles.radioButtom}
          />
        </View>
        <View style={styles.radioButtomViewWText}>
          <Text style={styles.textButton}>Option2</Text>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            style={styles.radioButtom}
          />
        </View>
      </View>

      <Button
        theme={{
          colors: {primary: '#00aaff'},
          text: 'white',
        }}
        style={styles.button}
        mode="contained"
        onPress={() => handlerClick()}>
        Submit
      </Button>
      <View style={{alignItems: 'center', margin: 20}}>
        <Text style={{fontSize: 16, color: 'black'}}>
          {countrRedux === 0 ? 'You didnt Submit' : 'Counter: ' + countrRedux}
        </Text>
      </View>
      <FooterScreen />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    backgroundColor: '#ffffff',
  },
  button: {
    margin: 15,
    color: 'white',
    borderRadius: 5,
  },
  radioButtomView: {
    flexDirection: 'row',
    alignContent: 'center',
    margin: 15,
    justifyContent: 'center',
  },
  radioButtomViewWText: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtom: {
    flex: 0,
  },
  textButton: {
    flex: 0,
  },
});
export default Form;
