import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IconButton, Tooltip } from 'react-native-paper';
import tw from 'twrnc';
import App from '../../../App';
import AppText from './AppText';

export const Logo_cpn = ({ imageURL, style = '' }) => {
  return (
    <Image
      style={tw`w-[55px] h-[55px] ${style}`}
      source={require('../../app_assets/img/logo.png')}
    />
  );
};

export const Menu_cpn = ({}) => {
  const navigation = useNavigation();
  return (
    <Tooltip title="Menu" backgroundColor="#fff">
      <IconButton
        icon="menu"
        size={25}
        iconColor="#264653"
        onPress={() => navigation.navigate('Menu')}
      />
    </Tooltip>
  );
};
export const DictionaryAndBMark_area = ({}) => {
  return (
    <View
      style={tw`flex flex-row justify-center items-center gap-2 rounded-full`}
    >
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={tw`w-[40px] h-[40px] border-2 border-white rounded-full`}
          source={require('../../app_assets/img/bookMark.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-white px-3 py-2 rounded-full`}
        onPress={() => {}}
      >
        <AppText text="Online Dictionary" style="text-[15px] font-medium" />
      </TouchableOpacity>
    </View>
  );
};
