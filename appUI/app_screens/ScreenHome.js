import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import HomeHeader from '../app_components/app_distribution_cpn/HomeHeader';
import EnglishCoreFeatures from '../app_components/app_my_cpn/EnglishCoreFeatures';
import TopicWiseVocab from '../app_components/app_my_cpn/TopicWiseVocab';
import { TopicWiseVocabData } from '../app_data/app/HomeData';
const ScreenHome = () => {
  return (
    <AppScreen styleOfPage="">
      <HomeHeader />
      <EnglishCoreFeatures />
      <TopicWiseVocab
        title={TopicWiseVocabData?.title}
        subTitle={TopicWiseVocabData?.subTitle}
        data={TopicWiseVocabData?.features.slice(0, 4)}
        buttonAccess={true}
        style="mb-32"
      />
    </AppScreen>
  );
};

export default ScreenHome;
