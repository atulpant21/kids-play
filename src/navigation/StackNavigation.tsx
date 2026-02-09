import React, {Suspense} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

const Stack = createNativeStackNavigator();

// Lazily load the screen components
const HomeScreen = React.lazy(() => import('../screens/home/Home'));
const SettingsScreen = React.lazy(() => import('../screens/settings/Settings'));

// Fallback component while loading
const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);


const RootStack = () => {
  return (
     <NavigationContainer>
      {/* Wrap the navigator with Suspense for the fallback UI */}
      <Suspense fallback={<LoadingScreen />}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
        </Suspense>
    </NavigationContainer>
  );
}

export default RootStack