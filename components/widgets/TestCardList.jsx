import { FlatList } from 'react-native'
import TestCard from '../entities/TestCard.jsx'

import testInformation from '../../constants/testInformation.js'

const TestCardList = () => {
  return (
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
  )
}

export default TestCardList
