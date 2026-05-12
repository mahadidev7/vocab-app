import { View, Text } from 'react-native';
import React from 'react';
import PlaySound from '../app_distribution_cpn/PlaySound';
import tw from 'twrnc';
import AppText from '../app_distribution_cpn/AppText';
import DictionaryAndBMark_area from '../app_distribution_cpn/DictionaryAndBMark_area';

const VocabularyNotFound = ({ findSingleVocab }) => {
  return (
    <View>
      <View
        style={tw`w-full p-4 flex-row flex-wrap items-center justify-start gap-3`}
      >
        {/* play sound button */}
        {/* <PlaySound /> */}
        {/* main word  */}
        <View style={tw`flex-1`}>
          <AppText
            text={findSingleVocab?.word || 'not supported'}
            style={`text-[${15 + 7}px] font-bold text-[#1979BD]`}
          />
          <AppText
            text={'Not Found'}
            style={`text-[${15 + 1}px] text-[#264653]`}
          />
        </View>
        <View style={tw`w-full mt-4 p-4 bg-[#953553] rounded-lg flex-col items-start justify-start gap-3`}>
          <AppText
            text={
              'Content is not available at the moment. Explore the online dictionary to continue learning.'
            }
            style={`text-[${15 + 1}px] text-[#ffffff] text-center mt-3`}
          />
          <View style={tw`w-full flex-row items-center justify-center gap-2 bg-[#ffffff] rounded-lg  py-2`}>
            <DictionaryAndBMark_area />
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default VocabularyNotFound;
