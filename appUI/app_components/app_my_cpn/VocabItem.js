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
  fontSize = 14,
}) => {
  return (
    <View style={tw`w-full p-2`}>
      <View
        style={tw`w-full rounded-lg flex-row flex-wrap items-center justify-start gap-3`}
      >
        {/* play sound button */}
        <PlaySound />
        {/* main word  */}
        <View style={tw`flex-1`}>
          <AppText
            text={word || 'not supported'}
            style={`text-[${fontSize + 7}px] font-bold text-[#1979BD]`}
          />
          <AppText
            text={audioData[0].trim() || 'not supported'}
            style={`text-[${fontSize + 1}px] text-[#264653]`}
          />
        </View>
      </View>
      {/* meaning, part of speech, examples */}
      <View
        style={tw`w-full pt-4 bg-[#fff] rounded-lg p-3 mt-4 border border-[#D7DBFF]`}
      >
        <AppText
          text={partOfSpeech.join(', ')}
          style={`text-[${fontSize}px] italic text-[#333]`}
        />
        <AppText
          text={meaning.join('; ')}
          style={`text-[${fontSize + 3}px] text-[#333] font-bold mt-2`}
        />
        <AppText
          text={'(' + simpleDefinition.join('; ') + ')'}
          style={`text-[${fontSize + 2}px] text-[#1979BD] mt-1`}
        />
        <View style={tw`w-full mt-2`}>
          {examples?.map((item, index) => (
            <AppText
              key={index}
              text={index + 1 + '. ' + item}
              style={`text-[${fontSize + 1}px] text-[#222] italic`}
            />
          ))}
        </View>
      </View>
      {/* Synonyms  */}
      {synonyms.length > 0 && (
        <View
          style={tw`w-full mt-4 gap-1 flex-row items-center flex-wrap flex`}
        >
          <AppText
            text={'Synonyms: '}
            style={`text-[${fontSize + 1}px] text-[#111] font-medium`}
          />
          <View
            style={tw`w-full mt-2 flex-row items-start flex-wrap flex gap-1`}
          >
            {synonyms?.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => {}}>
                <AppText
                  text={item}
                  style={`text-[${
                    fontSize + 1
                  }px] text-[#fff] bg-[#1979BD] p-1 px-3 rounded-full`}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Antonyms  */}
      {antonyms.length > 0 && (
        <View
          style={tw`w-full mt-2 gap-1 flex-row items-center flex-wrap flex`}
        >
          <AppText
            text={'Antonyms: '}
            style={`text-[${fontSize + 1}px] text-[#111] font-medium`}
          />
          <View
            style={tw`w-full mt-2 flex-row items-start flex-wrap flex gap-1`}
          >
            {antonyms?.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => {}}>
                <AppText
                  text={item}
                  style={`text-[${
                    fontSize + 1
                  }px] text-[#fff] bg-[#1979BD] p-1 px-3 rounded-full`}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {!!shortStory.trim() && (
        <>
          <AppText
            text={'A short story to feel the word: '}
            style={`text-[${
              fontSize + 1
            }px] text-[#111] mt-4 font-medium underline mb-1`}
          />
          <AppText
            text={shortStory}
            style={`text-[${fontSize + 2}px] text-[#000]`}
          />
        </>
      )}
    </View>
  );
};

export default VocabItem;
