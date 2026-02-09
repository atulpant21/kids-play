import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootStack from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

function App() {


  return (
    <SafeAreaProvider>
       <Provider store={store}>
      <RootStack />
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
