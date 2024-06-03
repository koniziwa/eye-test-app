import { View, Image, StyleSheet } from 'react-native'

import SERVER_URL from '../../constants/SERVER_URL.js'

const UserAvatar = ({ size, username, extrastyles }) => {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
    },
  })

  return (
    <View className={`rounded-full items-center justify-center ${extrastyles}`}>
      <Image
        className="w-full h-full rounded-full"
        style={styles.container}
        resizeMode="cover"
        source={{ uri: `${SERVER_URL}/images/avatars/koniziwa.jpg` }}
      />
    </View>
  )
}

export default UserAvatar
