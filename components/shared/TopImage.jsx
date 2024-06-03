import { Image, StyleSheet } from 'react-native'

const TopImage = ({ source }) => {
  const styles = StyleSheet.create({
    image: {
      width: 390,
      height: 532,
    },
  })

  return <Image style={styles.image} source={source} resizeMode="cover" />
}

export default TopImage
