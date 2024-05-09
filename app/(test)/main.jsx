import { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

import AuthServices from '../../api/AuthServices.js'

import TestCard from '../../components/entities/TestCard.jsx'

import testInformation from '../../constants/testInformation.js'
import images from '../../constants/images.js'

const main = () => {
  const [username, setUsername] = useState('loading...')

  useEffect(() => {
    AuthServices.getUserInformation()
      .then(({ data }) => {
        setUsername(data.username)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <SafeAreaView className="w-full px-4">
      <TouchableOpacity
        onPress={() => router.push('/profile')}
        className="flex-row gap-4 items-center"
      >
        <View className="rounded-full border-2 w-12 h-12 items-center justify-center">
          <Image
            className="w-8 h-8"
            resizeMode="cover"
            source={images.profileImage}
          />
        </View>
        <Text className="font-pmedium text-lg">{username}</Text>
      </TouchableOpacity>
      <FlatList
        className="w-full mt-4"
        data={testInformation}
        renderItem={({ item }) => (
          <TestCard
            route={item.route}
            color={item.color}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default main
