import { useEffect, useState } from 'react'
import { View, Text, Image, Platform, TouchableOpacity } from 'react-native'
import axios from 'axios'
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'

import AuthServices from '../../api/AuthServices'

import images from '../../constants/images.js'
import UserAvatar from '../../components/shared/UserAvatar.jsx'
import icons from '../../constants/icons.js'
import TestResultList from '../../components/widgets/TestResultList.jsx'
import SERVER_URL from '../../constants/SERVER_URL.js'

const createFormData = (photo, body = {}) => {
  const data = new FormData()

  data.append('photo', {
    name: body.username,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  })

  return data
}

const Profile = () => {
  const [user, setUser] = useState({})

  const handleUploadPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (!result.canceled) {
      const photo = result.assets[0]
      await axios.post(
        `${SERVER_URL}/profile/upload_avatar`,
        createFormData(photo, { username: user.username })
      )
    }
  }

  useEffect(() => {
    AuthServices.getUserInformation()
      .then(({ data }) => setUser(data))
      .catch(e => console.log(e))
  }, [])

  return (
    <View className="w-full h-full bg-white">
      <Image
        className="w-[390px] h-[295px]"
        resizeMode="cover"
        source={images.profileBG}
      />
      <View className="w-full h-full bg-white rounded-3xl -translate-y-6 py-6 px-4 items-center">
        <TouchableOpacity onPress={handleUploadPhoto}>
          <UserAvatar size={128} extrastyles={'-mt-24'} />
        </TouchableOpacity>
        <View className="p-4 flex-row gap-2 items-center">
          <Text className="text-center font-pbold text-2xl text-black">
            {user.username}
          </Text>
          <TouchableOpacity
            className="w-8 h-8"
            onPress={() => router.push('/profile-edit')}
          >
            <Image
              className="w-full h-full"
              resizeMode="contain"
              source={icons.pencil}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-center font-pregular text-lg">
            {`${user.name} ${user.surname} | ${user.city} | ${user.age} лет`}
          </Text>
        </View>
        <View className="mt-6 mb-4">
          <Text className="font-pbold text-primary-blue text-4xl">
            Мои результаты
          </Text>
        </View>
        <TestResultList examinations={user.examinations} />
      </View>
    </View>
  )
}

export default Profile
