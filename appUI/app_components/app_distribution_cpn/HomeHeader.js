import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { appColors } from '../../app_functions/Functions';
import { Logo_cpn, Menu_cpn } from '../app_distribution_cpn/AppShare_cpn';
import AppText from '../app_distribution_cpn/AppText';
import { Icon, IconButton, Tooltip } from 'react-native-paper';

const HomeHeader = () => {
  return (
    <View
      style={tw`bg-[${appColors?.primaryPro}] p-[10px] flex flex-row items-center justify-between `}
    >
      <Logo_cpn />

      {/* home header right site  */}
      <View style={tw` flex flex-row items-center justify-between gap-2`}>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
          style={tw` flex flex-row items-center justify-between gap-2 border-2 border-white px-[15px] py-[7px] rounded-[100px]`}
        >
          <Image
            style={tw`w-[27px] h-[27px]`}
            source={require('../../app_assets/img/hash_token.png')}
          />
          <AppText text="600" style="text-white text-[18px] font-medium" />
        </TouchableOpacity>
        {/* menu icon  */}
        <View>
          <Menu_cpn />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
