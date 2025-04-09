import React from 'react'
import { Text } from 'react-native'
import { LayoutScreen } from '@/components/LayoutScreen/LayoutScreen';

export default function Index() {
  return (
    <LayoutScreen
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Landing Screen</Text>
    </LayoutScreen>
  );
}
