import axios from 'axios'

import SERVER_URL from '../constants/SERVER_URL.js'

class TestServices {
  async testRabkin(previousAnswers, imageNumber, userAnswer, username) {
    const request = [
      ...previousAnswers,
      {
        username,
        imageNumber,
        userAnswer,
      },
    ]
    const response = await axios.post(`${SERVER_URL}/test/rabkin`, request)
    return JSON.parse(response.data)
  }
}

export default new TestServices()
