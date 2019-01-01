import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterView}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.fontSizeText}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.fontSizeText}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.fontSizeText}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counterView: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around'
  },
  fontSizeText: {
    fontSize: 20
  }
});
