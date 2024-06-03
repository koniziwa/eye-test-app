import { useEffect, useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import TestCardList from '../../components/widgets/TestCardList.jsx'

import AuthServices from '../../api/AuthServices.js'

import UserAvatar from '../../components/shared/UserAvatar.jsx'

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
    <SafeAreaView className="w-full h-full p-4 bg-white">
      <TouchableOpacity
        onPress={() => router.push('/profile')}
        className="flex-row items-center"
      >
        <UserAvatar size={64} />
        <Text className="font-pmedium ml-4 text-xl">{username}</Text>
      </TouchableOpacity>
      <TestCardList />
    </SafeAreaView>
  )
}

export default main
