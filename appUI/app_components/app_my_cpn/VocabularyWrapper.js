/* eslint-disable no-unused-vars */
import { Image, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import VocabItem from './VocabItem';
import VocabController from './VocabController';
import AppText from '../app_distribution_cpn/AppText';
import { Tooltip } from 'react-native-paper';
import tw from 'twrnc';
import VocabularyNotFound from './VocabularyNotFound';

const VocabularyWrapper = ({
  vocabData,
  vocabSingleItem,
  showVocabNumberOfArray,
  setShowVocabNumberOfArray,
  findSingleVocab,
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
      <View
        style={tw`w-full my-2 p-2 flex-row items-center justify-end gap-2 flex-wrap`}
      >
        <AppText
          text={`${showVocabNumberOfArray + 1}-${vocabData?.length}`}
          style="p-2 py-1 text-[#777] italic text-right border border-[#D7DBFF] rounded-full"
        />
        <Tooltip title="Controller of Reading page">
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={tw`w-[30px] h-[30px]`}
              source={require('../../app_assets/img/setting.png')}
            />
          </TouchableOpacity>
        </Tooltip>
      </View>
      {findSingleVocab?.notFound === true ? (
        <>
          {findSingleVocab?.item && (
            <VocabularyNotFound findSingleVocab={findSingleVocab?.item} />
          )}
        </>
      ) : (
        <>
          {vocabData?.length > 0 && (
            <VocabItem {...vocabSingleItem} fontSize={fontSize}  />
          )}
        </>
      )}
      {/* {vocabData?.length > 0 && (
        <VocabItem {...vocabSingleItem} fontSize={fontSize} />
      )} */}
      <VocabController nextHandler={nextHandler} prevHandler={prevHandler} />
    </View>
  );
};

export default VocabularyWrapper;
