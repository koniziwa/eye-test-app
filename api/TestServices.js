import axios from 'axios'

import SERVER_URL from '../constants/SERVER_URL.js'

class TestServices {
  async testRabkin(previousAnswers, imageNumber, userAnswer) {
    const request = [
      ...previousAnswers,
      {
        imageNumber,
        userAnswer,
      },
    ]
    console.log(request)
    const response = await axios.post(`${SERVER_URL}/test/rabkin`, request)
    console.log(response.data)
    return JSON.parse(response.data)
  }
}

export default new TestServices()
