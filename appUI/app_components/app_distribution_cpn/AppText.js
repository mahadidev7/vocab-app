import { Text } from 'react-native';
// import { capitalizeFirstSentence } from '../app_distribution_cpn/AppShare_cpn';
import tw from 'twrnc';

const AppText = ({ text = 'not supported', style = '' }) => {
  return (
    <Text style={tw` ${style}`}>
      {String(text).trim().charAt(0).toUpperCase() +
        String(text).trim().slice(1)}
    </Text>
  );
};

export default AppText;
