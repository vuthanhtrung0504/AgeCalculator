import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';
import DatePicker from './DatePicker';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: 'grey',
  },
  textInput: {
    height: 50,
    padding: 0,
    flex: 1,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  textInputContainer: {
    height: 60,
    marginHorizontal: 20
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal: 20,
    height: 50,
    borderRadius: 8
  }
});

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateVisible: false,
      date: {
        day: '',
        month: '',
        year: ''
      },
    };
  }

  render() {
    const { date, isDateVisible }= this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({ isDateVisible: true })}
        >
          <View style={styles.textInputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="DD/MM/YYYY"
              style={styles.textInput}
              returnKeyType="done"
              keyboardType="number-pad"
              value={date.day ? `${String(date.day).padStart(2, '0')}/${String(date.month).padStart(2, '0')}/${date.year}` :''}
              maxLength={10}
              pointerEvents="none"
              editable={false}
            />
          </View>
          <DatePicker
            visible={isDateVisible}
            onClose={() => this.setState({ isDateVisible: false })}
            onDayPress={data =>
              this.setState({ isDateVisible: false, date: data })
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
          if (date.day !== '' && date.month !== '' && date.year !== '') {
            const today = moment();
            const birthday = moment(`${date.day}/${date.month}/${date.year}}`, 'DD/MM/YYYY');
            if (today.valueOf() < birthday.valueOf()) {
              alert('Invalid Date')
              return
            }
            const year_age = today.diff(birthday, 'years')
            const month_age = today.diff(birthday, 'months')
            const day_age = today.diff(birthday, 'days')
            const alertString = `You are ${year_age} years, ${month_age} months, ${day_age} days old`
            alert(alertString)
          } else {
            alert('Invalid Date')
          }
        }}>
          <Text>CALCULATE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AgeCalculator;
