import { useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { router } from 'expo-router'
import axios from 'axios'

import AuthServices from '../../api/AuthServices.js'

import FormField from '../../components/entities/FormField.jsx'
import Button from '../../components/shared/Button.jsx'

import SERVER_URL from '../../constants/SERVER_URL.js'

const ProfileEdit = () => {
  const [user, setUser] = useState({})
  const [form, setForm] = useState({
    name: '',
    surname: '',
    city: '',
    age: '',
  })

  useEffect(() => {
    AuthServices.getUserInformation()
      .then(({ data }) => {
        setUser(data)
      })
      .catch(e => console.log(e))
  }, [])

  const handleUpdate = () => {
    axios
      .post(`${SERVER_URL}/profile/update`, {
        ...form,
        username: user.username,
      })
      .then(() => router.push('/profile'))
  }

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className="h-full bg-white py-6 px-4 items-center">
        <Text className="mt-12 text-primary-blue font-pbold text-3xl text-center">
          Редактирование информации об аккаунте
        </Text>
        <FormField
          title="Имя"
          value={form.name}
          handleChangeText={e => setForm({ ...form, name: e })}
          placeholder="Иван"
        />
        <FormField
          title="Фамилия"
          value={form.surname}
          handleChangeText={e => setForm({ ...form, surname: e })}
          placeholder="Сергеев"
        />
        <FormField
          title="Город"
          value={form.city}
          handleChangeText={e => setForm({ ...form, city: e })}
          placeholder="Санкт-Петербург"
        />
        <FormField
          title="Возраст"
          value={form.age}
          handleChangeText={e => setForm({ ...form, age: e })}
          placeholder="27"
        />
        <Button text="Сохранить" color="#4AA8FF" onPress={handleUpdate} />
      </View>
    </ScrollView>
  )
}

export default ProfileEdit
