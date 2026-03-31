import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Tooltip } from 'react-native-paper';

const VocabController = ({ nextHandler, prevHandler }) => {
  return (
    <View style={tw`w-full my-2 p-2 flex-row items-center justify-center`}>
      <View
        style={tw`w-2/3 flex-row items-center justify-between gap-5 border p-1  rounded-full border-[#D7DBFF]`}
      >
        <TouchableOpacity onPress={() => prevHandler()}>
          <Image
            style={tw`w-[38px] h-[38px]`}
            source={require('../../app_assets/img/left.png')}
          />
        </TouchableOpacity>
        <Tooltip title="Controller of Reading page">
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={tw`w-[40px] h-[40px]`}
              source={require('../../app_assets/img/setting.png')}
            />
          </TouchableOpacity>
        </Tooltip>

        <TouchableOpacity onPress={() => nextHandler()}>
          <Image
            style={tw`w-[38px] h-[38px]`}
            source={require('../../app_assets/img/right.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VocabController;
