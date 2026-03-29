import { View, Text } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import tw from 'twrnc';
import {
  ultimateVocabData,
  writingVocabData,
  listeningVocabData,
  speakingVocabData,
  TopicWiseVocabData,
} from '../../app_data/app/HomeData';
import CategoryBox from './CategoryBox';
import AppText from '../app_distribution_cpn/AppText';
import { appColors } from '../../app_functions/Functions';
import TopicWiseVocab from './TopicWiseVocab';

const CategoryItem = ({ filterDataName }) => {
  const [categoryData, setCategoryData] = useState(null);
  const [topicWiseData, setTopicWiseData] = useState(null);

  useLayoutEffect(() => {
    if (filterDataName === 'ultimateVocabData') {
      setCategoryData(ultimateVocabData);
      return;
    }
    if (filterDataName === 'writingVocabData') {
      setCategoryData(writingVocabData);
      return;
    }
    if (filterDataName === 'listeningVocabData') {
      setCategoryData(listeningVocabData);
      return;
    }
    if (filterDataName === 'speakingVocabData') {
      setCategoryData(speakingVocabData);
      return;
    }
    if (filterDataName === 'TopicWiseVocabData') {
      setTopicWiseData(TopicWiseVocabData);
      return;
    }
  }, [filterDataName]);

  return (
    <View>
      {!!categoryData && (
        <AppText
          text="Each CANDY has 15 words per day to keep learning easy and effective. If you want to learn more, you can do. Keep one section per day and build a strong vocabulary by completing it step by step."
          style="text-[15px] py-6 px-2 text-center italic text-[#666]"
        />
      )}
      <View
        style={tw`m-2 py-2 flex flex-row gap-x-4 flex-wrap items-center justify-between border-t border-b border-[#999]`}
      >
        <View style={tw`flex flex-row gap-1 items-center`}>
          <View style={tw`w-4 h-4 bg-[#6973BD] rounded-sm`}>
            <Text style={tw`text-[#6973BD] text-[1px]`}>s</Text>
          </View>
          <AppText text="General" style="text-[#6973BD]" />
        </View>
        <View style={tw`flex flex-row gap-1 items-center`}>
          <View style={tw`w-4 h-4 bg-[#65A7BC] rounded-sm`}>
            <Text style={tw`text-[#65A7BC] text-[1px]`}>s</Text>
          </View>
          <AppText text="Basic" style="text-[#65A7BC]" />
        </View>
        <View style={tw`flex flex-row gap-1 items-center`}>
          <View style={tw`w-4 h-4 bg-[#F67C5D] rounded-sm`}>
            <Text style={tw`text-[#F67C5D] text-[1px]`}>d</Text>
          </View>
          <AppText text="Advance" style="text-[#F67C5D]" />
        </View>
        <View style={tw`flex flex-row gap-1 items-center`}>
          <View style={tw`w-4 h-4 bg-[#264653] rounded-sm`}>
            <Text style={tw`text-[#264653] text-[1px]`}>d</Text>
          </View>
          <AppText text="Phrases" style="text-[#264653]" />
        </View>
        <View style={tw`flex flex-row gap-1 items-center`}>
          <View style={tw`w-4 h-4 bg-[#4C0A6A] rounded-sm`}>
            <Text style={tw`text-[#4C0A6A] text-[1px]`}>d</Text>
          </View>
          <AppText text="Topic" style="text-[#4C0A6A]" />
        </View>
      </View>
      <View style={tw`px-2 my-2 mb-32`}>
        {!!categoryData &&
          categoryData?.map((items, key) => (
            <CategoryBox {...items} key={key} />
          ))}
        {!!topicWiseData && <TopicWiseVocab data={topicWiseData?.features} />}
        {!categoryData && !topicWiseData && (
          <AppText
            text="Vocabulary sections is not available, at the moment. Please try again later."
            style={`text-center text-[18px] mt-4 text-[${appColors?.warning}]`}
          />
        )}
      </View>
    </View>
  );
};

export default CategoryItem;
