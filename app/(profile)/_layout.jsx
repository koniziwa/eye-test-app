import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const ProfileLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="profile-edit" options={{ headerShown: false }} />
      </Stack>
      <StatusBar />
    </>
  )
}

export default ProfileLayout
