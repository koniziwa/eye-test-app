import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const TestLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="main" options={{ headerShown: false }} />
        <Stack.Screen name="color-perception" options={{ headerShown: false }} />
        <Stack.Screen name="cff" options={{ headerShown: false }} />
      </Stack>
      <StatusBar />
    </>
  )
}

export default TestLayout