import React, { useEffect, useState } from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';
import VocabularyWrapper from '../app_components/app_my_cpn/VocabularyWrapper';
import { useSelector } from 'react-redux';
import { CatchReadVocabData } from '../redux/slices/basketSlice';

const ScreenLearn = ({ route }) => {
  const [vocabData, setVocabData] = useState([]);
  const [showVocabNumberOfArray, setShowVocabNumberOfArray] = useState(0);
  const CatchReadVocabDataFromRedux = useSelector(CatchReadVocabData);

  useEffect(() => {
    setVocabData(CatchReadVocabDataFromRedux || []);
  }, [CatchReadVocabDataFromRedux]);

  return (
    <AppScreen>
      <AppHeader {...route.params} />
      {!!vocabData?.length > 0 && (
        <VocabularyWrapper
          vocabData={vocabData}
          vocabSingleItem={vocabData[showVocabNumberOfArray]}
          showVocabNumberOfArray={showVocabNumberOfArray}
          setShowVocabNumberOfArray={setShowVocabNumberOfArray}
        />
      )}
    </AppScreen>
  );
};

export default ScreenLearn;
