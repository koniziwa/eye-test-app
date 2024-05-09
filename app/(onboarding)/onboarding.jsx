import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

import images from '../../constants/images.js'

const OnboardingScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className="w-full h-full">
        <Image
          className="w-[390px] h-[532px]"
          source={images.onboardingImage}
          resizeMode="cover"
        />
        <View className="h-full bg-white rounded-3xl -translate-y-6 py-6 px-4">
          <Text className="text-2xl font-pbold max-w-[320px]">
            Не переставайте видеть мир в красках
          </Text>
          <Text className="mt-3 text-base font-pregular">
            Зарегистрируйтесь в приложении, чтобы иметь возможность отслеживать
            свои показатели зрения
          </Text>
          <TouchableOpacity
            className="bg-primary-black mt-8 rounded-lg py-4 justify-center items-center"
            onPress={() => {
              AsyncStorage.setItem('showOnboarding', 'false').then(() =>
                router.push('/sign-up')
              )
            }}
          >
            <Text className="text-white font-pbold text-2xl">
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden />
    </ScrollView>
  )
}

export default OnboardingScreen
