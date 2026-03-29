import { Text } from 'react-native';
import tw from 'twrnc';

const AppText = ({ text = '', style = '' }) => {
  return <Text style={tw` ${style}`}>{String(text).trim()}</Text>;
};

export default AppText;
