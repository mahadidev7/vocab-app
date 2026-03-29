import React from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';
import HeroSection from '../app_components/app_my_cpn/HeroSection';
import CategoryItem from '../app_components/app_my_cpn/CategoryItem';

const ScreenCategory = ({ route }) => {
  const { data } = route.params;
  return (
    <AppScreen styleOfPage="">
      <AppHeader {...route.params} />
      {data && (
        <>
          <HeroSection
            name={data?.name}
            description={data?.description}
            message={data?.message}
          />
          <CategoryItem {...data} />
        </>
      )}
    </AppScreen>
  );
};

export default ScreenCategory;
