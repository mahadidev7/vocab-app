import { View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { appColors } from '../../app_functions/Functions';
import { Logo_cpn, Menu_cpn } from '../app_distribution_cpn/AppShare_cpn';

const HomeHeader = () => {
  return (
    <View
      style={tw`bg-[${appColors?.primaryPro}] p-[10px] flex flex-row items-center justify-between `}
    >
      <Logo_cpn />

      {/* home header right site  */}
      <View style={tw` flex flex-row items-center justify-between gap-2`}>
        {/* menu icon  */}
        <View>
          <Menu_cpn />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
