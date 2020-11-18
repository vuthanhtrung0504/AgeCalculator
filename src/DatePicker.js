import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Modal, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  calendarContainer: {
    marginHorizontal: 15,
    marginTop: Dimensions.get('window').height * 0.3,
    flex: 1,
  }
});

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal {...this.props} transparent onRequestClose={this.props.onClose}>
        <TouchableOpacity style={styles.overlay} onStartShouldSetResponder={() => true} activeOpacity={1}>
          <View style={styles.calendarContainer}>
            <Calendar onDayPress={this.props.onDayPress}/>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default DatePicker;
