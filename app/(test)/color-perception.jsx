import { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'
import { router } from 'expo-router'

import FormField from '../../components/entities/FormField.jsx'

import TestServices from '../../api/TestServices.js'
import AuthServices from '../../api/AuthServices.js'

import SERVER_URL from '../../constants/SERVER_URL.js'

const ColorPerception = () => {
  const [username, setUsername] = useState('')
  const [userAnswer, setUserAnswer] = useState('')
  const [previousAnswers, setPreviousAnswers] = useState([])
  const [imageNumber, setImageNumber] = useState(1)

  useEffect(() => {
    AuthServices.getUserInformation()
      .then(({ data }) => setUsername(data.username))
      .catch(e => console.log(e))
  }, [])

  const handlePress = () => {
    TestServices.testColorPerception(
      previousAnswers,
      imageNumber,
      userAnswer,
      username
    )
      .then(({ status, result }) => {
        switch (status) {
          case 'next':
            setPreviousAnswers([
              ...previousAnswers,
              {
                username,
                imageNumber,
                userAnswer,
              },
            ])
            setImageNumber(result)
            break
          case 'result':
            router.push('/main')
            break
        }

        setUserAnswer('')
      })
      .catch(e => console.log(e))
  }

  return (
    <ScrollView
      className="bg-white"
      contentContainerStyle={{ height: '100%' }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="w-full h-full items-center justify-center p-4">
        <Image
          className="w-[300px] h-[300px] rounded-xl"
          source={{
            uri: `${SERVER_URL}/images/rabkins_charts/${imageNumber}.jpg`,
          }}
        />
        <FormField
          title="Ваш ответ:"
          value={userAnswer}
          handleChangeText={e => setUserAnswer(e)}
          placeholder="Что вы видите на этой картинке?"
        />
        <TouchableOpacity
          className="w-full bg-primary-blue mt-8 rounded-lg py-4 justify-center items-center"
          onPress={handlePress}
        >
          <Text className="text-white font-pbold text-2xl">Далее</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ColorPerception
