import React from 'react';
import { View, Text } from 'react-native';

export default function PrettyPrint(props) {
  return (
    <View>
      <Text>{JSON.stringify(props, null, 2)}</Text>
    </View>
  );
}
