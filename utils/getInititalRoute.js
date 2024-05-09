import AsyncStorage from '@react-native-async-storage/async-storage'

const getInitialRoute = async () => {
  try {
    const showOnboarding = await AsyncStorage.getItem('showOnboarding')
    if (showOnboarding === 'false') {
      const jwt = await AsyncStorage.getItem('AccessToken')
      if (!jwt) return 'sign-up'
      return 'main'
    }
    return 'onboarding'
  } catch (e) {
    console.log(e)
  }
}

export default getInitialRoute
