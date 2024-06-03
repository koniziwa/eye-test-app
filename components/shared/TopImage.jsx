import { Image, StyleSheet } from 'react-native'

const TopImage = ({ source }) => {
  const styles = StyleSheet.create({
    image: {
      width: 532,
      height: 390,
    },
  })

  return <Image style={styles.image} source={source} resizeMode="cover" />
}

export default TopImage
