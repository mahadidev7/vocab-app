import { TouchableOpacity, View } from 'react-native';
import { TopicWiseVocabData } from '../../app_data/app/HomeData';
import React from 'react';
import tw from 'twrnc';
import AppText from '../app_distribution_cpn/AppText';
import { appColors } from '../../app_functions/Functions';
import { useNavigation } from '@react-navigation/native';

const TopicWiseVocab = ({
  title,
  subTitle,
  data,
  buttonAccess = false,
  style = '',
}) => {
  const navigation = useNavigation();

  return (
    <View style={tw`my-4 px-2 mb-9 ${style}`}>
      {!!title && (
        <AppText
          text={title}
          style={`text-[22px]  font-bold text-[${appColors?.secondary}]`}
        />
      )}
      {!!subTitle && (
        <AppText
          text={subTitle}
          style={`text-[16px] mb-3 text-[${appColors?.subText}]`}
        />
      )}

      {!!data && (
        <>
          <View
            style={tw` flex flex-row items-center justify-around flex-wrap`}
          >
            {data?.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={tw`w-[48%] md:w-[190px] h-[130px] flex items-center justify-center rounded-[10px] mb-3 border border-[#ddd] bg-[#4C0A6A] p-3`}
                onPress={() =>
                  navigation.navigate(item?.visitPage || 'Home', {
                    data: item,
                  })
                }
              >
                <View style={tw``}>
                  <AppText
                    text={item?.name}
                    style={`text-center font-medium text-[18px] text-[#fff]`}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {!!buttonAccess && (
            <TouchableOpacity
              style={tw`my-2`}
              onPress={() =>
                navigation.navigate('Category', {
                  data: {
                    name: 'Topic wise vocabulary and phrases',
                    description:
                      'Essential words you need to pass any language exam.',
                    message:
                      'Topic-wise vocabulary and phrases prepare you for common exam topics, helping you speak clearly, write effectively, and score higher in IELTS, TOEFL, and PTE.',
                    filterDataName: 'TopicWiseVocabData',
                  },
                })
              }
            >
              <AppText
                text="Learn More "
                style={`text-center text-white text-[18px] p-4 bg-[${appColors?.warning}] rounded-[10px] `}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default TopicWiseVocab;
