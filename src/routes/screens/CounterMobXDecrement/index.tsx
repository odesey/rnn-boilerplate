import React from 'react'
import { StyleSheet, ViewStyle, ScrollView } from 'react-native'
import { observer } from 'mobx-react-lite'
import { CounterStoreContext } from 'store/counter.store'
import { Button, Text } from 'core/ui'

export type CounterMobXDecrementProps = {}

export const CounterMobXDecrement: React.FC<CounterMobXDecrementProps> = observer(() => {
  const { count, decrement } = React.useContext(CounterStoreContext)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text size={34}>{`Clicked: ${count} times!`}</Text>
      <Button title="Decrement" onPress={decrement} />
    </ScrollView>
  )
})

interface Style {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
})
