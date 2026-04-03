import { View, Text } from 'react-native';
import React from 'react';
import PlaySound from '../app_distribution_cpn/PlaySound';
import tw from 'twrnc';
import AppText from '../app_distribution_cpn/AppText';

const VocabularyNotFound = ({ findSingleVocab }) => {
  return (
    <View>
      <View
        style={tw`w-full p-4 flex-row flex-wrap items-center justify-start gap-3`}
      >
        {/* play sound button */}
        <PlaySound />
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
        <View>
          <AppText
            text={
              'Content is not available at the moment. Explore the online dictionary to continue learning.'
            }
            style={`text-[${15 + 1}px] text-[#264653]`}
          />
        </View>
        
      </View>
    </View>
  );
};

export default VocabularyNotFound;
