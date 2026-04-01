import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
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
    id: 1,
    name: 'Own App',
    url: 'own',
    value: 'own',
  },
  {
    id: 2,
    name: 'Google Translate',
    url: 'https://translate.google.com/',
    value: 'https://translate.google.com/',
  },
  {
    id: 3,
    name: 'Cambridge Dictionary',
    url: 'https://dictionary.cambridge.org/',
    value: 'https://dictionary.cambridge.org/',
  },
  {
    id: 4,
    name: 'Oxford Dictionary',
    url: 'https://www.oxfordlearnersdictionaries.com/',
    value: 'https://www.oxfordlearnersdictionaries.com/',
  },
  {
    id: 5,
    name: 'dictionar - comprehensive definitions',
    url: 'https://www.dictionary.com/',
    value: 'https://www.dictionary.com/',
  },
  {
    id: 6,
    name: 'youglish for Pronunciation ',
    url: 'https://youglish.com/pronounce/context/english',
    value: 'https://youglish.com/pronounce/context/english',
  },
  {
    id: 7,
    name: 'ozdic',
    url: 'https://ozdic.com/collocation/sign',
    value: 'https://ozdic.com/collocation/sign',
  },
  {
    id: 8,
    name: 'britannica Dictionary',
    url: 'https://www.britannica.com/dictionary',
    value: 'https://www.britannica.com/dictionary',
  },
  {
    id: 9,
    name: 'english-bangla  Dictionary',
    url: 'https://www.english-bangla.com/',
    value: 'https://www.english-bangla.com/',
  },
  {
    id: 10,
    name: 'collins Dictionary',
    url: 'https://www.collinsdictionary.com/',
    value: 'https://www.collinsdictionary.com/',
  },
  {
    id: 11,
    name: 'vocabulary Dictionary',
    url: 'https://www.vocabulary.com/dictionary/',
    value: 'https://www.vocabulary.com/dictionary/',
  },
  {
    id: 12,
    name: 'thesaurus Dictionary for Synonyms and Antonyms',
    url: 'https://www.thesaurus.com/',
    value: 'https://www.thesaurus.com/',
  },
  {
    id: 13,
    name: 'your Dictionary',
    url: 'https://www.yourdictionary.com/',
    value: 'https://www.yourdictionary.com/',
  },
  {
    id: 14,
    name: 'merriam-webster Dictionary',
    url: 'https://www.merriam-webster.com/',
    value: 'https://www.merriam-webster.com/',
  },
];

const OnlineDictionaryArea = () => {
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
        <AppText text="Note: Make sure your internet connection is stable. Because these Dictionaries require an active internet connection." style='text-[16px] text-center my-4' />
        <View>
          <TouchableOpacity
            onPress={() => handleSave()}
            style={tw`bg-[#1979BD] p-4 rounded-full mb-12 w-full self-end`}
          >
            <AppText text="Visit" style="text-[18px] text-white text-center" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnlineDictionaryArea;
