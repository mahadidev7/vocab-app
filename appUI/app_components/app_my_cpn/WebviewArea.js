/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import WebView from 'react-native-webview';
import tw from 'twrnc';
import AppText from '../app_distribution_cpn/AppText';

const WebviewArea = ({ value, vocabSingleItem }) => {
  const [webURL, setWebURL] = useState(null);
  const appHeight = Dimensions.get('window').height;

  useEffect(() => {
    setWebURL(null);

    const maimWord = vocabSingleItem?.word || 'dictionary';

    if (value?.code === '+') {
      const replaceText = maimWord
        .replace(/[!()\/^\\S{3,}$]/g, '')
        .split(' ')
        .filter(word => word !== '')
        .join(value?.code || ' ');

      const webUrl = value?.webView?.replace('{mainword}', replaceText) || null;
      setWebURL(webUrl);
      return;
    } else if (value?.code === '%20') {
      const replaceText = maimWord
        .replace(/[!()\/^\\S{3,}$]/g, '')
        .split(' ')
        .filter(word => word !== '')
        .join(value?.code || ' ');

      const webUrl = value?.webView?.replace('{mainword}', replaceText) || null;
      setWebURL(webUrl);
      return;
    } else if (value?.code === '_') {
      const replaceText = maimWord
        .replace(/[!()\/^\\S{3,}$]/g, '')
        .split(' ')
        .filter(word => word !== '')
        .join(value?.code || ' ');

      const webUrl = value?.webView?.replace('{mainword}', replaceText) || null;
      setWebURL(webUrl);
      return;
    } else if (value?.code === '-') {
      const replaceText = maimWord
        .replace(/[!()\/^\\S{3,}$]/g, '')
        .split(' ')
        .filter(word => word !== '')
        .join(value?.code || ' ');

      const webUrl = value?.webView?.replace('{mainword}', replaceText) || null;
      setWebURL(webUrl);
      return;
    } else {
      setWebURL('https://www.google.com/');
      return;
    }
  }, [value, vocabSingleItem]);

  return (
    <View style={tw`h-[${appHeight - 120}px] w-full`}>
      {webURL ? (
        <WebView
          source={{ uri: webURL || 'https://www.google.com/' }}
          style={{ flex: 1 }}
        />
      ) : (
        <AppText
          text="There are no web resources available. change other options"
          style="p-4 text-center text-[16px]"
        />
      )}
    </View>
  );
};

export default WebviewArea;
