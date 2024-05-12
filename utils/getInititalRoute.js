import AsyncStorage from '@react-native-async-storage/async-storage'

import AuthServices from '../api/AuthServices.js'

const getInitialRoute = async () => {
  try {
    const showOnboarding = await AsyncStorage.getItem('showOnboarding')
    if (showOnboarding === 'false') {
      const isTokenValid = await AuthServices.checkToken()
      if (!isTokenValid) return 'sign-up'
      return 'main'
    }
    return 'onboarding'
  } catch (e) {
    console.log(e)
  }
}

export default getInitialRoute
