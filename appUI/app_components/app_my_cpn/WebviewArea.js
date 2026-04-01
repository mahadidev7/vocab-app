/* eslint-disable react-native/no-inline-styles */
import { Dimensions, View } from 'react-native';
import WebView from 'react-native-webview';

import tw from 'twrnc';
import AppText from '../app_distribution_cpn/AppText';

const WebviewArea = ({ value, vocabSingleItem }) => {
  const appHeight = Dimensions.get('window').height;

  console.log('===vocabSingleItem=================================');
  console.log(vocabSingleItem);
  console.log('====================================');
  
  return (
    <View style={tw`h-[${appHeight - 120}px] w-full`}>
      <WebView
        source={{ uri: value?.url }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default WebviewArea;
