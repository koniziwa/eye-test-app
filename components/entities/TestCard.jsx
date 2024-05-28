import { View, Text, TouchableOpacity, Image } from 'react-native'
import { router } from 'expo-router'

import icons from '../../constants/icons.js'

const TestCard = ({ route, title, description, color }) => {
  return (
    <View
      className={`w-full flex-row rounded-xl justify-between p-4 border-2 border-black mb-4`}
    >
      <View className="w-[260px] gap-y-4">
        <Text className="font-pbold text-black text-2xl">{title}</Text>
        <Text className="font-pregular text-black text-sm">{description}</Text>
      </View>
      <TouchableOpacity onPress={() => router.push(route)}>
        <Image source={icons.arrow} />
      </TouchableOpacity>
    </View>
  )
}

export default TestCard
