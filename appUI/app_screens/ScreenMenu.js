import { View, Text } from 'react-native';
import React from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import HomeHeader from '../app_components/app_distribution_cpn/HomeHeader';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';

const ScreenMenu = ({ route }) => {
//   const { pageName } = route.params;

  return (
    <AppScreen styleOfPage="">
      <AppHeader {...route.params} />
    </AppScreen>
  );
};

export default ScreenMenu;
