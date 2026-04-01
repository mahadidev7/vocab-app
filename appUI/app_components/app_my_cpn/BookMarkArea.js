import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { RadioButton } from 'react-native-paper';
import AppText from '../app_distribution_cpn/AppText';
import { useDispatch, useSelector } from 'react-redux';
import {
  CatchBookMarkDrawer,
  setBookMarkDrawer,
} from '../../redux/slices/basketSlice';

const BookMarkArea = () => {
  const [bookMarkName, setBookMarkName] = useState('');
  const dispatch = useDispatch();
  const CatchBookMarkDrawerFromRedux = useSelector(CatchBookMarkDrawer);

  const handleSave = () => {
    dispatch(setBookMarkDrawer(!CatchBookMarkDrawerFromRedux));
  };

  return (
    <View>
      <View
        style={tw`w-full bg-[#264653] p-3 py-6`}
      >
        <Text style={tw`text-white text-[18px] text-left font-medium`}>
          Bookmark for deep learning with filtering
        </Text>
        <Text style={tw`text-white text-[15px] text-left text-[#ddd] mt-1`}>
          Save important words and review them anytime using smart filters for faster and deeper learning.
        </Text>
      </View>
      <View style={tw`p-3`}>
        <RadioButton.Group
          onValueChange={newValue => setBookMarkName(newValue)}
          value={bookMarkName}
        >
          <View
            style={tw`flex-row items-center gap-2 border-b py-2 border-[#dddddd]`}
          >
            <RadioButton value="Review" color="#fff" />
            <AppText text="Review Basket" style="text-[16px] text-white" />
            <AppText text={`( 100 / 100 )`} style="text-[14px] text-white" />
          </View>
          <View
            style={tw`flex-row items-center gap-2 border-b py-2 border-[#dddddd]`}
          >
            <RadioButton value="Easy" color="#fff" />
            <AppText text="Easy Basket" style="text-[16px] text-white" />
            <AppText text={`( 100 / 50 )`} style="text-[14px] text-white" />
          </View>
          <View
            style={tw`flex-row items-center gap-2 border-b py-2 border-[#dddddd]`}
          >
            <RadioButton value="Hard" color="#fff" />
            <AppText text="Hard Basket" style="text-[16px] text-white" />
            <AppText text={`( 100 / 50 )`} style="text-[14px] text-white" />
          </View>
          <View
            style={tw`flex-row items-center gap-2 border-b py-2 border-[#dddddd]`}
          >
            <RadioButton value="Remove" color="#fff" disabled={true} />
            <AppText
              text="Remove from Bookmark"
              style="text-[16px] text-white"
            />
          </View>
        </RadioButton.Group>

        <View>
          <TouchableOpacity
            onPress={() => handleSave()}
            style={tw`bg-[#264653] px-4 py-2 rounded-full mt-12 self-end`}
          >
            <AppText text="Save" style="text-[15px] text-white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookMarkArea;
