import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

export default class Timer extends React.Component{
  renderActionButton=()=>{
    const { isRunning } = this.props;
    if (isRunning) {
      return (
        <TimerButton
          color="#DB2828"
          title="Stop"
          onPress={this.handleStopPress}
        />
      );
    }
    return (
      <TimerButton
        color="#DB2828"
        title="Start"
        onPress={this.handleStartPress}
      />
    )
  }

  handleStartPress=()=>{
    const {id,onStartPress} = this.props
    onStartPress(id);
  }

  handleStopPress=()=>{
    const {id,onStopPress} = this.props
    onStopPress(id)
  }

  render(){
    const {id,title, project, elapsed,onEditPress,onRemovePress} = this.props
    const elapsedString = millisecondsToHuman(elapsed);
    return(
      <View style={styles.timerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{project}</Text>
        <Text style={styles.elapsedTime}>{elapsedString}</Text>
        <View style={styles.buttonGroup}>
          <TimerButton color="blue" small title="Edit" onPress={onEditPress}/>
          <TimerButton color="blue" small title="Remove" onPress={()=>onRemovePress(id)}/>
        </View>
        {this.renderActionButton()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});