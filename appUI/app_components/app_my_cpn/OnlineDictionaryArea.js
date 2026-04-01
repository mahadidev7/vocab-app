import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Checkbox, RadioButton } from 'react-native-paper';
import AppText from '../app_distribution_cpn/AppText';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import {
  CatchOnlineDictionaryDrawer,
  CatchOnlineDictionaryValue,
  setOnlineDictionaryDrawer,
  setOnlineDictionaryValue,
} from '../../redux/slices/basketSlice';

const OnlineDictionaryData = [
  {
    id: 0,
    name: 'Own App',
    url: 'own',
    value: 'own',
    webView: null,
  },
  {
    id: 1,
    name: 'Google',
    url: 'https://www.google.com/',
    value: 'https://www.google.com/',
    webView: 'https://www.google.com/search?q={mainword}+meaning',
    code: '+',
  },
  {
    id: 2,
    name: 'Google Translate',
    url: 'https://translate.google.com/',
    value: 'https://translate.google.com/',
    webView:
      'https://translate.google.com/?ui=tob&sl=en&tl=bn&text={mainword}&op=translate',
    code: '%20',
  },
  {
    id: 3,
    name: 'Cambridge Dictionary',
    url: 'https://dictionary.cambridge.org/',
    value: 'https://dictionary.cambridge.org/',
    webView:
      'https://dictionary.cambridge.org/spellcheck/english/?q={mainword}',
    code: '+',
  },
  // {
  //   id: 4,
  //   name: 'Oxford Dictionary',
  //   url: 'https://www.oxfordlearnersdictionaries.com/',
  //   value: 'https://www.oxfordlearnersdictionaries.com/',
  //   webView:
  //     'https://www.oxfordlearnersdictionaries.com/spellcheck/english/?q={mainword}',
  //   code: '+',
  // },
  {
    id: 5,
    name: 'dictionar - comprehensive definitions',
    url: 'https://www.dictionary.com/',
    value: 'https://www.dictionary.com/',
    webView: 'https://www.dictionary.com/browse/{mainword}',
    code: '+',
  },
  {
    id: 6,
    name: 'youglish for Pronunciation ',
    url: 'https://youglish.com/pronounce/context/english',
    value: 'https://youglish.com/pronounce/context/english',
    webView: 'https://youglish.com/pronounce/{mainword}/english',
    code: '_',
  },
  {
    id: 8,
    name: 'britannica Dictionary',
    url: 'https://www.britannica.com/dictionary',
    value: 'https://www.britannica.com/dictionary',
    webView: 'https://www.britannica.com/dictionary/{mainword}',
    code: '-',
  },
  {
    id: 9,
    name: 'english-bangla  Dictionary',
    url: 'https://www.english-bangla.com/',
    value: 'https://www.english-bangla.com/',
    webView: 'https://www.english-bangla.com/dictionary/{mainword}',
    code: '%20',
  },
  {
    id: 10,
    name: 'collins Dictionary',
    url: 'https://www.collinsdictionary.com/',
    value: 'https://www.collinsdictionary.com/',
    webView: 'https://www.collinsdictionary.com/dictionary/english/{mainword}',
    code: '-',
  },
  {
    id: 11,
    name: 'vocabulary Dictionary',
    url: 'https://www.vocabulary.com/dictionary/',
    value: 'https://www.vocabulary.com/dictionary/',
    webView: 'https://www.vocabulary.com/dictionary/{mainword}',
    code: '%20',
  },
  {
    id: 12,
    name: 'thesaurus Dictionary for Synonyms and Antonyms',
    url: 'https://www.thesaurus.com/',
    value: 'https://www.thesaurus.com/',
    webView: 'https://www.thesaurus.com/browse/{mainword}',
    code: '-',
  },
  {
    id: 13,
    name: 'your Dictionary',
    url: 'https://www.yourdictionary.com/',
    value: 'https://www.yourdictionary.com/',
    webView: 'https://www.yourdictionary.com/{mainword}',
    code: '-',
  },
  {
    id: 14,
    name: 'merriam-webster Dictionary',
    url: 'https://www.merriam-webster.com/',
    value: 'https://www.merriam-webster.com/',
    webView: 'https://www.merriam-webster.com/dictionary/{mainword}',
    code: '%20',
  },
];

const OnlineDictionaryArea = () => {
  const [checked, setChecked] = useState(false);
  const [onlineDictionary, setOnlineDictionary] = useState(null);
  const dispatch = useDispatch();
  const CatchOnlineDictionaryDrawerFromRedux = useSelector(
    CatchOnlineDictionaryDrawer,
  );
  const CatchOnlineDictionaryValueFromRedux = useSelector(
    CatchOnlineDictionaryValue,
  );

  const handleSave = () => {
    if (Boolean(onlineDictionary) === false) {
      Alert.alert(
        'Select Dictionary',
        'Please select an online dictionary and make sure you are connected to the internet',
        [{ text: 'ok' }],
      );
      return;
    } else {
      dispatch(setOnlineDictionaryValue(onlineDictionary));
      dispatch(
        setOnlineDictionaryDrawer(!CatchOnlineDictionaryDrawerFromRedux),
      );
    }
  };

  useEffect(() => {
    setOnlineDictionary(CatchOnlineDictionaryValueFromRedux || null);
  }, [CatchOnlineDictionaryValueFromRedux]);

  return (
    <View style={tw`w-full h-full bg-[#fff]`}>
      <View style={tw`w-full bg-[#264653] p-3 py-6`}>
        <Text style={tw`text-white text-[18px] text-left font-medium`}>
          Advanced Learning Dictionary
        </Text>
        <Text style={tw`text-white text-[15px] text-left`}>
          Explore meanings, pronunciation, and real examples to strengthen your
          vocabulary effectively.
        </Text>
      </View>
      <View style={tw`p-3`}>
        <View style={tw`border border-[#dddddd] rounded-lg mt-6 bg-[#fff]`}>
          <RadioButton.Group
            onValueChange={newValue => setOnlineDictionary(newValue)}
            value={onlineDictionary}
          >
            {OnlineDictionaryData?.map((item, index) => (
              <View
                key={index}
                style={tw`flex-row items-center gap-2 border-b p-4 border-[#dddddd]`}
              >
                <RadioButton value={item} color="#1979BD" />
                <AppText
                  text={item.name}
                  style="text-[16px] text-[#1979BD] font-medium"
                />
              </View>
            ))}
          </RadioButton.Group>
        </View>
        <View style={tw`flex-row items-center justify-between gap-2 mt-4 `}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <AppText
            text="This feature requires internet access. May include third-party advertisements outside our control."
            style="text-[16px] text-left my-4 flex-1 font-medium"
          />
        </View>
        <View>
          <TouchableOpacity
            disabled={!checked}
            onPress={() => handleSave()}
            style={tw`bg-[#1979BD] p-4 rounded-full mb-12 w-full self-end opacity-${checked ? '100' : '50'}`}
          >
            <AppText text="Visit" style="text-[18px] text-white text-center" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnlineDictionaryArea;
