import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const qrCode = () => {
    const {data} = useLocalSearchParams();
  return (
    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default qrCode