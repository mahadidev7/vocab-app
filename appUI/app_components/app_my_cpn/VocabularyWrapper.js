import { Alert, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import VocabItem from './VocabItem';
import VocabController from './VocabController';
import AppText from '../app_distribution_cpn/AppText';

const VocabularyWrapper = ({ vocabData }) => {
  const [vocabAllData, setVocabAllData] = useState(vocabData || null);
  const [showVocabNumberOfArray, setShowVocabNumberOfArray] = useState(0);
  const [fontSize, setFontSize] = useState(15);

  const nextHandler = () => {
    if (showVocabNumberOfArray < vocabAllData.length - 1) {
      setShowVocabNumberOfArray(showVocabNumberOfArray + 1);
    } else {
      setShowVocabNumberOfArray(0); // restart from beginning
    }
  };

  const prevHandler = () => {
    if (showVocabNumberOfArray > 0) {
      setShowVocabNumberOfArray(showVocabNumberOfArray - 1);
    } else {
      setShowVocabNumberOfArray(vocabAllData.length - 1);
    }
  };

  useEffect(() => {
    // if (route?.params?.data) {
    //   setVocabAllData(route?.params?.data || null);
    // } else {
    //   setVocabAllData(null);
    // }
  }, []);
  return (
    <View>
      <AppText
        text={`${showVocabNumberOfArray + 1}-${vocabData.length}`}
        style="p-2 text-[#777] italic text-right"
      />
      <VocabItem
        {...vocabAllData[showVocabNumberOfArray]}
        fontSize={fontSize}
      />
      <VocabController nextHandler={nextHandler} prevHandler={prevHandler} />
    </View>
  );
};

export default VocabularyWrapper;
