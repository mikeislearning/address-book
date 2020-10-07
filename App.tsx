import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';

import { RootContainer } from 'src/navigation/NavContainer';
import store from 'src/store';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * Main App Screen
 *
 */

const App: FC = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
