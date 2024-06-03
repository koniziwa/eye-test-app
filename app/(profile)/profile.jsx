import { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import AuthServices from '../../api/AuthServices'

import images from '../../constants/images.js'
import UserAvatar from '../../components/shared/UserAvatar.jsx'
import icons from '../../constants/icons.js'
import TestResultList from '../../components/widgets/TestResultList.jsx'

const Profile = () => {
  const [user, setUser] = useState({})

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
        <UserAvatar size={128} extrastyles={'-mt-24'} />
        <View className="p-4 flex-row gap-2 items-center">
          <Text className="text-center font-pbold text-2xl text-black">
            {user.username}
          </Text>
          <TouchableOpacity className="w-8 h-8">
            <Image
              className="w-full h-full"
              resizeMode="contain"
              source={icons.pencil}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-center font-pregular text-lg">
            Москва, 19 лет, муж.
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
