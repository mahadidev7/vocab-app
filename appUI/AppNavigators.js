import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from './app_screens/ScreenHome';
import ScreenLearn from './app_screens/ScreenLearn';
import ScreenMenu from './app_screens/ScreenMenu';
import ScreenCategory from './app_screens/ScreenCategory';
import ScreenSearch from './app_screens/ScreenSearch';

const AppNavigators = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={ScreenHome}
          options={{ title: 'Home' }}
          initialParams={{ pageName: 'Home', rightSide: true, menuBar: true, dictionary: false, goBackWarning: false } }
        />
        <Stack.Screen
          name="Learn"
          component={ScreenLearn}
          options={{ title: 'Learn' }}
          initialParams={{ pageName: ' ', rightSide: true, menuBar: false, dictionary: true, goBackWarning: true } }
        />
        <Stack.Screen
          name="Search"
          component={ScreenSearch}
          options={{ title: 'Search' }}
          initialParams={{ pageName: ' ', rightSide: true, menuBar: false, dictionary: true, goBackWarning: true } }
        />
        <Stack.Screen
          name="Menu"
          component={ScreenMenu}
          options={{ title: 'Menu'} }
          initialParams={{ pageName: 'Menu', rightSide: false, menuBar: false, dictionary: false, goBackWarning: false }}
        />
        <Stack.Screen
          name="Category"
          component={ScreenCategory}
          options={{ title: 'Menu'} }
          initialParams={{ pageName: 'Category', rightSide: true, menuBar: true, dictionary: false, goBackWarning: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigators;
