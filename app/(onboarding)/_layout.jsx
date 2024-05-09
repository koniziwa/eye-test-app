import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const OnboardingLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      </Stack>
      <StatusBar hidden />
    </>
  )
}

export default OnboardingLayout