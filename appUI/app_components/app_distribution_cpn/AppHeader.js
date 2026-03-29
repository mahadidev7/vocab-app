import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { appColors, BackAction } from '../../app_functions/Functions';
import { Appbar } from 'react-native-paper';
import AppText from './AppText';
import { Menu_cpn, DictionaryAndBMark_area } from './AppShare_cpn';

const AppHeader = ({ pageName = ' ', rightSide = true, menuBar= false, dictionary= false }) => {
  // const navigation = useNavigation();

  return (
    <View
      style={tw`bg-[${appColors?.primaryPro}] p-[10px] flex flex-row items-center justify-between `}
    >
      <View style={tw` flex flex-row items-center gap-2 `}>
        <BackAction />
        <AppText text={pageName} style="text-[20px] text-white" />
      </View>
      {rightSide && 
        <View>
          {menuBar && <Menu_cpn />}
          {dictionary && <DictionaryAndBMark_area />}
        </View>
      }
    </View>
  );
};

export default AppHeader;
