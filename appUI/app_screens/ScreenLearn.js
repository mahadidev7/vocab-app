import React, { useEffect, useState } from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';
import VocabItem from '../app_components/app_my_cpn/VocabItem';

const ScreenLearn = ({ route }) => {
  const [vocabData, setVocabData] = useState(null);
  const [showVocabNumberOfArray, setShowVocabNumberOfArray] = useState(1);

  console.log('=====vocabData===============================');
  console.log(vocabData);
  console.log('====================================');

  useEffect(() => {
    if (route?.params?.data) {
      setVocabData(route?.params?.data || null);
    } else {
      setVocabData(null);
    }
  }, [route.params]);

  return (
    <AppScreen>
      <AppHeader {...route.params} />
      {!!vocabData && <VocabItem {...vocabData[0]} />}
    </AppScreen>
  );
};

export default ScreenLearn;
