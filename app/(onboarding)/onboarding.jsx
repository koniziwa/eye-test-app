import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Button from '../../components/shared/Button.jsx'
import TopImage from '../../components/shared/TopImage.jsx'

import images from '../../constants/images.js'

const OnboardingScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className="w-full h-full">
        <TopImage source={images.onboardingImage} />
        <View className="h-full bg-white rounded-3xl -translate-y-6 py-6 px-4">
          <Text className="text-2xl font-pbold max-w-[320px]">
            Не переставайте видеть мир в красках
          </Text>
          <Text className="mt-3 text-base font-pregular">
            Зарегистрируйтесь в приложении, чтобы иметь возможность отслеживать
            свои показатели зрения
          </Text>
          <Button
            text="Зарегистрируйтесь"
            color="#232323"
            onPress={() =>
              AsyncStorage.setItem('showOnboarding', 'false').then(() =>
                router.push('/sign-up')
              )
            }
          />
        </View>
      </View>
      <StatusBar hidden />
    </ScrollView>
  )
}

export default OnboardingScreen
