import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import PlaySound from '../app_distribution_cpn/PlaySound';
import AppText from '../app_distribution_cpn/AppText';

const VocabItem = ({
  antonyms = [],
  audioData = [],
  examples = [],
  meaning = [],
  partOfSpeech = [],
  shortStory = '',
  simpleDefinition = [],
  synonyms = [],
  word = '',
}) => {
  return (
    <View style={tw`w-full p-2 my-3`}>
      <View
        style={tw`w-full rounded-lg flex-row flex-wrap items-center justify-start gap-3`}
      >
        {/* play sound button */}
        <PlaySound />
        {/* main word  */}
        <View style={tw`flex-1`}>
          <AppText text={word} style="text-[22px] font-bold text-[#4D59B8]" />
          <AppText text={audioData[0]} style="text-[16px] text-[#264653]" />
        </View>
      </View>
      {/* meaning, part of speech, examples */}
      <View
        style={tw`w-full pt-4 bg-[#F4F9F9] rounded-lg p-3 mt-4 border border-[#D7DBFF]`}
      >
        <AppText
          text={partOfSpeech.join(', ')}
          style="text-[14px] italic text-[#333]"
        />
        <AppText
          text={meaning.join('; ')}
          style="text-[17px] text-[#222] font-bold mt-2"
        />
        <AppText
          text={'(' + simpleDefinition.join('; ') + ')'}
          style="text-[15px] text-[#4D59B8]"
        />
        <View style={tw`w-full mt-2`}>
          {examples?.map((item, index) => (
            <AppText
              key={index}
              text={index + 1 + '. ' + item}
              style="text-[16px] text-[#222]"
            />
          ))}
        </View>
      </View>
      <View style={tw`w-full mt-4 gap-1 flex-row items-center flex-wrap flex`}>
        <AppText
          text={'Synonyms: '}
          style="text-[15px] text-[#6973BD] font-medium"
        />
        <View style={tw`w-full mt-2 flex-row items-start flex-wrap flex gap-1`}>
          {synonyms?.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {}}>
              <AppText
                text={item}
                style="text-[15px] text-[#000] border border-[#ddd] bg-[#EBEDFF] p-1 px-2 rounded-full"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={tw`w-full mt-2 gap-1 flex-row items-center flex-wrap flex`}>
        <AppText
          text={'Antonyms: '}
          style="text-[15px] text-[#6973BD] font-medium"
        />
        <View style={tw`w-full mt-2 flex-row items-start flex-wrap flex gap-1`}>
          {antonyms?.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {}}>
              <AppText
                text={item}
                style="text-[15px] text-[#000] border border-[#ddd] bg-[#EBEDFF] p-1 px-2 rounded-full"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <AppText
        text={'Short Story to feel the word: '}
        style="text-[15px] text-[#6973BD] mt-4 font-medium"
      />
      <AppText text={shortStory} style="text-[15px] text-[#000]" />
    </View>
  );
};

export default VocabItem;
