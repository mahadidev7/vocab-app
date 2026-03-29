import React from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';

const ScreenLearn = ({route}) => {
  return (
    <AppScreen>
      <AppHeader {...route.params} />
    </AppScreen>
  )
}

export default ScreenLearn