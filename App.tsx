import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RootStack from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaProvider>
       <Provider store={store}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <RootStack />
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
