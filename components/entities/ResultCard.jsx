import { Text, View, StyleSheet } from 'react-native'

const ResultCard = ({ type, date, result, color }) => {
  const styles = StyleSheet.create({
    card: {
      borderColor: color,
    },
  })

  return (
    <View className="w-full border-2 rounded-xl p-2 mb-3" style={styles.card}>
      <Text className="font-pbold text-xl">{type}</Text>
      <Text className="text-lg">{date}</Text>
      <Text className="font-pregular text-lg">{result}</Text>
    </View>
  )
}

export default ResultCard
