import React, { useEffect, useState } from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';
import VocabularyWrapper from '../app_components/app_my_cpn/VocabularyWrapper';

const ScreenLearn = ({ route }) => {
  const [vocabData, setVocabData] = useState(null);
  const [showVocabNumberOfArray, setShowVocabNumberOfArray] = useState(0);

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
      {!!vocabData && (
        <VocabularyWrapper
          vocabData={route?.params?.data}
        />
      )}
    </AppScreen>
  );
};

export default ScreenLearn;
