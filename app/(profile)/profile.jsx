import { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'

import AuthServices from '../../api/AuthServices'

import images from '../../constants/images.js'
import icons from '../../constants/icons.js'

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
        <View className="rounded-full border-2 w-32 h-32 -mt-24 items-center justify-center bg-white">
          <Image
            className="w-3/4 h-3/4"
            resizeMode="contain"
            source={images.profileImage}
          />
        </View>
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
          <Text className="text-center font-pregular">
            Москва, 19 лет, муж.
          </Text>
        </View>
        <View className="mt-6 mb-4">
          <Text className="font-pbold text-primary-blue text-4xl">
            Мои результаты
          </Text>
        </View>
        <FlatList
          className="w-full h-full"
          data={user.examinations}
          renderItem={({ item }) => (
            <View className="w-full border-2 border-black rounded-xl p-2 mb-3">
              <Text className="text-black font-pbold text-lg">{item.type}</Text>
              <Text className="text-black text-md">{item.date}</Text>
              <Text className="text-black font-pregular text-md">
                {item.result}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default Profile
