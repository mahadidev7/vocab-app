import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import AppText from './AppText';
import {
  CatchBookMarkDrawer,
  CatchOnlineDictionaryDrawer,
  setBookMarkDrawer,
  setOnlineDictionaryDrawer,
} from '../../redux/slices/basketSlice';

export const DictionaryAndBMark_area = ({}) => {
  const dispatch = useDispatch();
  const CatchBookMarkDrawerFromRedux = useSelector(CatchBookMarkDrawer);
  const CatchOnlineDictionaryDrawerFromRedux = useSelector(
    CatchOnlineDictionaryDrawer,
  );

  const handleBookMarkPress = () => {
    dispatch(setBookMarkDrawer(!CatchBookMarkDrawerFromRedux));
  };
  const handleOnlineDictionaryPress = () => {
    dispatch(setOnlineDictionaryDrawer(!CatchOnlineDictionaryDrawerFromRedux));
  };

  return (
    <View
      style={tw`flex flex-row justify-center items-center gap-2 rounded-full`}
    >
      <TouchableOpacity onPress={() => handleBookMarkPress()}>
        <Image
          style={tw`w-[40px] h-[40px] border-2 border-white rounded-full`}
          source={require('../../app_assets/img/bookMark.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-white px-3 py-2 rounded-full`}
        onPress={() => handleOnlineDictionaryPress()}
      >
        <AppText text="Online Dictionary" style="text-[15px] font-medium" />
      </TouchableOpacity>
    </View>
  );
};

export default DictionaryAndBMark_area;
