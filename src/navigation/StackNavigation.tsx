import React, {Suspense} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

// Lazily load the screen components
const HomeScreen = React.lazy(() => import('../screens/home/Home'));
const SettingsScreen = React.lazy(() => import('../screens/settings/Settings'));
const Login = React.lazy(() => import('../screens/login/Login'));

// Fallback component while loading
const LoadingScreen = () => (
  <View style={styles.loading}>
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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
        </Suspense>
    </NavigationContainer>
  );
}

export default RootStack

const styles = StyleSheet.create({ 
   loading:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
  })