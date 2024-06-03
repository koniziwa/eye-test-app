import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import getInitialRoute from '../utils/getInititalRoute.js'

const SplashScreen = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      getInitialRoute().then(initialRoute => router.push(initialRoute))
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <View className="w-full h-full items-center justify-center bg-primary-blue">
        <Text className="font-pbold text-white text-6xl">EyeTest</Text>
      </View>
      <StatusBar hidden />
    </>
  )
}

export default SplashScreen
