import React from 'react'
import { View, StyleSheet } from 'react-native'
import useListViewModel from '../../viewModels/useListViewModel';
import ListItem from './ListItem';
import Animated from 'react-native-reanimated';

const Home: React.FC = () => {
  const numColumns = 2;
  // Select the users from the Redux store
  // const users = useSelector((state: RootState) => state.users.users);
  const { items } = useListViewModel();

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
            return <ListItem user={item} />
        }}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    flex: 1,
   },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default Home