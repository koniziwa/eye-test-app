import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
      <StatusBar hidden />
    </>
  )
}

export default AuthLayout