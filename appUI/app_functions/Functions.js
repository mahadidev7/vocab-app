import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { Appbar, Icon, IconButton } from 'react-native-paper';
import tw from 'twrnc';

export const appColors = {
  primaryPro: '#00AAAC',
  primary: '#2A9D8F',
  secondary: '#264653',
  warning: '#F67C5D',
  white: '#FFFFFF',
  dark: '#000000',
  subText: '#333',
};

export const BackAction = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`bg-[#fff] rounded-[50px] p-2`}
      onPress={() => navigation.goBack()}
    >
      <Icon source="arrow-left" color={appColors?.primary} size={25} />
    </TouchableOpacity>
  );
};


