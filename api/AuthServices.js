import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import SERVER_URL from '../constants/SERVER_URL.js'

class AuthServices {
  async checkToken() {
    const token = await AsyncStorage.getItem('AccessToken')
    const { data } = await axios.post(
      `${SERVER_URL}/auth/isTokenValid`,
      {},
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'x-auth-token': token,
        },
      }
    )
    return data
  }

  async getUserInformation() {
    const isTokenValid = await this.checkToken()
    if (isTokenValid) {
      const token = await AsyncStorage.getItem('AccessToken')
      const user = await axios.get(`${SERVER_URL}/auth/user`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'x-auth-token': token,
        },
      })
      return user
    }

    return 'Ошибка на стороне сервера'
  }
}

export default new AuthServices()
