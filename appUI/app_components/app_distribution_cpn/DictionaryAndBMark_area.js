import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import AppText from './AppText';
import {
  CatchOnlineDictionaryDrawer,
  CatchOnlineDictionaryValue,
  setOnlineDictionaryDrawer,
  setOnlineDictionaryValue,
} from '../../redux/slices/basketSlice';

export const DictionaryAndBMark_area = ({headingTopCloseBtn=false}) => {
  const dispatch = useDispatch();
  const CatchOnlineDictionaryDrawerFromRedux = useSelector(
    CatchOnlineDictionaryDrawer,
  );
  const CatchOnlineDictionaryValueFromRedux = useSelector(
    CatchOnlineDictionaryValue,
  );
  const handleOnlineDictionaryPress = () => {
    dispatch(setOnlineDictionaryDrawer(!CatchOnlineDictionaryDrawerFromRedux));
  };

  return (
    <View
      style={tw`flex flex-row justify-center items-center gap-1 rounded-full`}
    >
      <TouchableOpacity
        style={tw`bg-white px-3 py-2 rounded-full`}
        onPress={() => handleOnlineDictionaryPress()}
      >
        <AppText text="Online Dictionary" style="text-[15px] font-medium" />
      </TouchableOpacity>

      { headingTopCloseBtn === true && (
        <>
          {Boolean(CatchOnlineDictionaryValueFromRedux) === false ||
        (CatchOnlineDictionaryValueFromRedux?.value !== 'own' && (
          <TouchableOpacity
            style={tw`bg-[#000000] w-8 h-8 justify-center items-center rounded-full`}
            onPress={() => dispatch(setOnlineDictionaryValue({id: 0, name: 'None (Own App)', url: 'own', value: 'own', webView: null}))}
          >
            <AppText text="x" style="text-[16px] text-white" />
          </TouchableOpacity>
        ))}
        </>)
      }
    </View>
  );
};

export default DictionaryAndBMark_area;
