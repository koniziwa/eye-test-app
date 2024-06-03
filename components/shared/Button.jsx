import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ text, color, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
    },
  })

  return (
    <TouchableOpacity
      className="mt-8 rounded-lg py-4 justify-center items-center"
      style={styles.button}
      onPress={onPress}
    >
      <Text className="text-white font-pbold text-2xl">{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
