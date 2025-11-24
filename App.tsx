import { StyleSheet, Text, TouchableOpacity, useTVEventHandler, View } from 'react-native';
import React from 'react';

export default function App() {
  const [lastEventType, setLastEventType] = React.useState('');

  const myTVEventHandler = evt => {
    setLastEventType(evt.eventType);
  };

  useTVEventHandler(myTVEventHandler);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>
          This example enables an instance of TVEventHandler to show the last
          event detected from the Apple TV Siri remote or from a keyboard.
        </Text>
      </TouchableOpacity>
      <Text style={{color: 'blue'}}>{lastEventType}</Text>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
