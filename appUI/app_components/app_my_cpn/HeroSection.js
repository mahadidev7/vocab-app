import { Image, View } from 'react-native';
import React from 'react';
import AppText from '../app_distribution_cpn/AppText';
import { appColors } from '../../app_functions/Functions';
import tw from 'twrnc';

const HeroSection = ({ name, description, message }) => {
  return (
    <View style={tw`my-2 px-2`}>
      <Image
        style={tw`w-[100%] h-[120px] rounded-lg mb-4`}
        resizeMode="cover"
        source={require('../../app_assets/img/Keep.png')}
      />
      <AppText
        text={name || ''}
        style={`text-[22px] font-bold text-[${appColors?.secondary}]`}
      />
      <AppText
        text={description || ''}
        style={`text-[16px] text-[${appColors?.subText}] `}
      />
      <AppText text={message || ''} style={`text-[17px] text-[#444] italic`} />
    </View>
  );
};

export default HeroSection;
