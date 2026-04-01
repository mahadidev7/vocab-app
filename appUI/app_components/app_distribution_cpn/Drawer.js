import { Image, TouchableOpacity } from 'react-native';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import {
  setBookMarkDrawer,
  setOnlineDictionaryDrawer,
} from '../../redux/slices/basketSlice';
import AppText from './AppText';
import { appColors } from '../../app_functions/Functions';

const Drawer = ({ children, styleOfPage }) => {
  const dispatch = useDispatch();
  const handleBookMarkPress = () => {
    dispatch(setBookMarkDrawer(false));
    dispatch(setOnlineDictionaryDrawer(false));
  };

  return (
    <View
      style={tw`w-full h-full absolute -bottom-2 left-0 bg-[#00000099]  ${styleOfPage}`}
    >
      <TouchableOpacity
        onPress={() => handleBookMarkPress()}
        style={tw`flex flex-row justify-center items-center gap-0 bg-[${appColors?.warning}] p-2 py-1 pr-5 rounded-full self-end m-2`}
      >
        <Image
          style={tw`w-[30px] h-[30px]`}
          source={require('../../app_assets/img/close.png')}
        />
        <AppText
          text="Close"
          style="text-[15px] font-medium text-white uppercase"
        />
      </TouchableOpacity>
      <ScrollView
        style={tw`w-full h-full flex-1 bg-[#2A9D8F] mt-9 border-t-8 border-[#1979BD] rounded-t-[10px]`}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Drawer;
