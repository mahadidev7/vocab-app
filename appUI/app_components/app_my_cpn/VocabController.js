import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const VocabController = ({ nextHandler, prevHandler, showVocabNumberOfArray }) => {
  const disableCatch = showVocabNumberOfArray === 0;
  return (
    <View style={tw`w-full my-2 p-2 flex-row items-center justify-end gap-2`}>
      <View
        style={tw`flex-row items-center justify-between gap-5 border p-1  rounded-full border-[#D7DBFF]`}
      >
        <TouchableOpacity onPress={() => prevHandler()} disabled={disableCatch} style={disableCatch ? tw`opacity-40` : tw`opacity-100`}>
          <Image
            style={tw`w-[38px] h-[38px]`}
            source={require('../../app_assets/img/left.png')}
          />
        </TouchableOpacity>

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
