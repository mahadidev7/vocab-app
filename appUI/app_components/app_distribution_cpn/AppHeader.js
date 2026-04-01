import { View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { appColors } from '../../app_functions/Functions';
import GoBack from '../../app_components/app_distribution_cpn/GoBack';
import AppText from './AppText';
import { Menu_cpn } from './AppShare_cpn';
import DictionaryAndBMark_area from '../app_distribution_cpn/DictionaryAndBMark_area';

const AppHeader = ({
  pageName = ' ',
  rightSide = true,
  menuBar = false,
  dictionary = false,
  goBackWarning = false,
}) => {

  return (
    <View
      style={tw`bg-[${appColors?.primaryPro}] p-[10px] flex flex-row items-center justify-between `}
    >
      <View style={tw` flex flex-row items-center gap-2 `}>
        <GoBack goBackWarning={goBackWarning} />
        <AppText text={pageName} style="text-[20px] text-white" />
      </View>
      {rightSide && (
        <View>
          {menuBar && <Menu_cpn />}
          {dictionary && <DictionaryAndBMark_area />}
        </View>
      )}
    </View>
  );
};

export default AppHeader;
