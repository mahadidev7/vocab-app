import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigators from './appUI/AppNavigators';
import { StoreRoom } from './appUI/redux/StoreRoom';

import { Provider } from 'react-redux';
function App() {
  return (
    <SafeAreaProvider>
      <Provider store={StoreRoom}>
        <PaperProvider>
          <AppNavigators />
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
