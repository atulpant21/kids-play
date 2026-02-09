import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { User } from '../../models/User';
import useListViewModel from '../../viewModels/useListViewModel';

const Home: React.FC = () => {
  // Select the users from the Redux store
  // const users = useSelector((state: RootState) => state.users.users);
  const { items } = useListViewModel();

  interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserItem user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
});

export default Home