import { StyleSheet, FlatList, View, Text } from 'react-native'
import ResultCard from '../entities/ResultCard.jsx'

import testInformation from '../../constants/testInformation.js'

const TestResultList = ({ examinations }) => {
  return (
    <FlatList
      className="w-full h-full"
      data={examinations}
      renderItem={({ item }) => {
        const { color } = testInformation.filter(
          ({ title }) => title === item.type
        )[0]
        return <ResultCard color={color} {...item} />
      }}
    />
  )
}

export default TestResultList
