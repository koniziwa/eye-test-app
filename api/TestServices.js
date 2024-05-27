import axios from 'axios'

import SERVER_URL from '../constants/SERVER_URL.js'

class TestServices {
  async testColorPerception(
    previousAnswers,
    imageNumber,
    userAnswer,
    username
  ) {
    const request = [
      ...previousAnswers,
      {
        username,
        imageNumber,
        userAnswer,
      },
    ]
    const response = await axios.post(
      `${SERVER_URL}/test/color-perception`,
      request
    )
    return JSON.parse(response.data)
  }

  async testVisualAcuity(previousAnswers, imageNumber, userAnswer, username) {
    const request = [
      ...previousAnswers,
      {
        username,
        imageNumber,
        userAnswer,
      },
    ]
    const response = await axios.post(
      `${SERVER_URL}/test/visual-acuity`,
      request
    )
    return JSON.parse(response.data)
  }
}

export default new TestServices()
