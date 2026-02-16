import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { User } from '../../models/User';

interface Props {
  user: User;
}

const ListItem: React.FC<Props> = ({ user }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50); // Start position for slide-in

  useEffect(() => {
    // Animate when the component mounts
    opacity.value = withTiming(1, { duration: 500, easing: Easing.ease });
    translateY.value = withTiming(0, { duration: 600, easing: Easing.out(Easing.ease) });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <Animated.View style={[styles.itemContainer, animatedStyle]}>
      <View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      </View>
    </Animated.View>
  );
};

export default ListItem

const styles = StyleSheet.create({
    itemContainer: {
    flex: 1,
    padding: 15,
    margin: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
})