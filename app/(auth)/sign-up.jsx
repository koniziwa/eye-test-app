import { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import axios from 'axios'

import FormField from '../../components/entities/FormField.jsx'

import SERVER_URL from '../../constants/SERVER_URL.js'

import images from '../../constants/images.js'
import icons from '../../constants/icons.js'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [errorText, setErrorText] = useState('')

  const handleSignUp = () => {
    const user = {
      username: form.username,
      email: form.email,
      password: form.password,
    }

    axios
      .post(`${SERVER_URL}/auth/registration`, user)
      .then(() => {
        router.push('/sign-in')
      })
      .catch(e => {
        setErrorText(e.response.data.message)
      })
  }

  return (
    <ScrollView>
      <View className="w-full h-full">
        <Image
          source={images.signUpImage}
          resizeMode="cover"
          className="w-[390px] h-[295px]"
        />
        <View className="h-full bg-white rounded-3xl -translate-y-6 py-6 px-4 items-center">
          <Text className="mt-3 text-primary-blue font-pbold text-4xl">
            Регистрация
          </Text>
          <FormField
            title="Имя пользователя"
            value={form.username}
            handleChangeText={e => setForm({ ...form, username: e })}
            placeholder="user123"
            icon={icons.user}
          />
          <FormField
            title="Почта"
            value={form.email}
            handleChangeText={e => setForm({ ...form, email: e })}
            placeholder="user@mail.ru"
            keyboardType="email-address"
            icon={icons.mail}
          />
          <FormField
            title="Пароль"
            value={form.password}
            handleChangeText={e => setForm({ ...form, password: e })}
            placeholder="Не менее 8 символов"
            icon={icons.lock}
          />
          {errorText.length > 0 ? (
            <Text className="text-center mt-4 text-red-600  font-pmedium text-md">
              {errorText}
            </Text>
          ) : null}
          <TouchableOpacity
            onPress={() => router.push('/sign-in')}
            className="w-full items-center justify-center mt-2"
          >
            <Text className="underline text-md text-primary-blue text-center">
              Я уже зарегистрирован. Войти
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full bg-primary-blue mt-8 rounded-lg py-4 justify-center items-center"
            onPress={handleSignUp}
          >
            <Text className="text-white font-pbold text-2xl">
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp
