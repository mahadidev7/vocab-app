/* eslint-disable no-unused-vars */
import {View } from 'react-native';
import React, { useEffect, useState } from 'react';
import VocabItem from './VocabItem';
import VocabController from './VocabController';
import AppText from '../app_distribution_cpn/AppText';

const VocabularyWrapper = ({
  vocabData,
  vocabSingleItem,
  showVocabNumberOfArray,
  setShowVocabNumberOfArray,
}) => {
  const [fontSize, setFontSize] = useState(15);

  const nextHandler = () => {
    if (showVocabNumberOfArray < vocabData?.length - 1) {
      setShowVocabNumberOfArray(showVocabNumberOfArray + 1);
    } else {
      setShowVocabNumberOfArray(0); // restart from beginning
    }
  };

  const prevHandler = () => {
    if (showVocabNumberOfArray > 0) {
      setShowVocabNumberOfArray(showVocabNumberOfArray - 1);
    } else {
      setShowVocabNumberOfArray(vocabData?.length - 1);
    }
  };


  return (
    <View>
      <AppText
        text={`${showVocabNumberOfArray + 1}-${vocabData?.length}`}
        style="p-2 text-[#777] italic text-right"
      />
      {vocabData?.length > 0 && (
        <VocabItem
          {...vocabSingleItem}
          fontSize={fontSize}
        />
      )}
      <VocabController nextHandler={nextHandler} prevHandler={prevHandler} />
    </View>
  );
};

export default VocabularyWrapper;
