/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigators from './appUI/AppNavigators';
function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppNavigators />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
