import { Image, TouchableOpacity, View } from 'react-native';
import { EnglishCoreFeaturesData } from '../../app_data/app/HomeData';
import React from 'react';
import tw from 'twrnc';
import AppText from '../app_distribution_cpn/AppText';
import { appColors } from '../../app_functions/Functions';
import { useNavigation } from '@react-navigation/native';

const EnglishCoreFeatures = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`my-4 px-2`}>
      <AppText
        text={EnglishCoreFeaturesData?.title}
        style={`text-[22px] font-bold text-[${appColors?.secondary}]`}
      />
      <AppText
        text={EnglishCoreFeaturesData?.subTitle}
        style={`text-[16px] mb-3 text-[${appColors?.subText}]`}
      />
      <View style={tw`flex flex-row items-start justify-between flex-wrap`}>
        {EnglishCoreFeaturesData?.features?.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={tw`w-[100%] md:w-[380px] flex flex-row items-center justify-between flex-wrap rounded-[15px] mb-2 border border-[#ddd] bg-[${item?.bgColor}] overflow-hidden`}
            onPress={() =>
              navigation.navigate(item?.visitPage, {
                data: item,
              })
            }
          >
            <View style={tw`flex-1 p-5`}>
              <AppText
                text={item?.name}
                style={`text-left font-medium text-[18px] text-[#fff] mt-3`}
              />
              <AppText
                text={item?.description}
                style={`text-left text-[14px] text-[#ddd] pb-5`}
              />
            </View>
            <Image
              style={tw`w-[42%] h-[150px]`}
              resizeMode="cover"
              source={item?.imageURL}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default EnglishCoreFeatures;
