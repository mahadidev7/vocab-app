/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';
import VocabularyWrapper from '../app_components/app_my_cpn/VocabularyWrapper';
import VocabularyNotFound from '../app_components/app_my_cpn/VocabularyNotFound';
import WebviewArea from '../app_components/app_my_cpn/WebviewArea';
import { useSelector } from 'react-redux';
import {
  CatchOnlineDictionaryValue,
  CatchReadVocabData,
} from '../redux/slices/basketSlice';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert, BackHandler } from 'react-native';
import { AllVocabData } from '../app_data/app/HomeData';
import { mergeObjects } from '../app_functions/Functions';

const ScreenSearch = ({ route }) => {
  const [findSingleVocab, setFindSingleVocab] = useState(null);
  const [vocabStringArray, setVocabStringArray] = useState(null);
  const [vocabData, setVocabData] = useState([]);
  const [showVocabNumberOfArray, setShowVocabNumberOfArray] = useState(0);
  const CatchReadVocabDataFromRedux = useSelector(CatchReadVocabData);
  const CatchOnlineDictionaryValueFromRedux = useSelector(
    CatchOnlineDictionaryValue,
  );
  const navigation = useNavigation();

  const confirmGoBack = () => {
    Alert.alert(
      'Are you sure you want to go back?',
      'Don’t stop now! Going back will interrupt your learning session.',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Go Back',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  };

  useEffect(() => {
    setVocabStringArray(
      route.params?.data.data.split(',').filter(item => item !== '') || [],
    );
  }, [route]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        confirmGoBack();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove();
    }, []),
  );

  useLayoutEffect(() => {
    if (!!Boolean(vocabStringArray)) {
      const singleItem = AllVocabData?.find(
        item =>
          item?.word?.toLowerCase()?.trim() ===
          vocabStringArray[showVocabNumberOfArray]?.toLowerCase()?.trim(),
      );

      // const singleItemArray = AllVocabData?.map(item => {
      //   if (
      //     item?.word?.toLowerCase()?.trim() ===
      //     vocabStringArray[showVocabNumberOfArray]?.toLowerCase()?.trim()
      //   ) {
      //     return item;
      //   } else {
      //     return false;
      //   }
      // });

      // const mergeObjectsValue = mergeObjects(singleItemArray.filter(Boolean));

      if (!!Boolean(singleItem)) {
        const generateObject = {
          notFound: false,
          singleItem,
        };
        setFindSingleVocab(generateObject);
      } else {
        const generateObject = {
          notFound: true,
          item: {
            word: vocabStringArray[showVocabNumberOfArray],
          },
        };
        setFindSingleVocab(generateObject);
      }
      return;
    } else {
      return;
    }
  }, [vocabStringArray, AllVocabData, showVocabNumberOfArray]);

  return (
    <AppScreen>
      <AppHeader {...route.params} />

      {Boolean(CatchOnlineDictionaryValueFromRedux) === false ||
      CatchOnlineDictionaryValueFromRedux?.value === 'own' ? (
        <>
          {findSingleVocab && (
            <VocabularyWrapper
              vocabData={vocabStringArray}
              vocabSingleItem={findSingleVocab?.singleItem}
              showVocabNumberOfArray={showVocabNumberOfArray}
              setShowVocabNumberOfArray={setShowVocabNumberOfArray}
              findSingleVocab={findSingleVocab || false}
            />
          )}
        </>
      ) : (
        <WebviewArea
          value={CatchOnlineDictionaryValueFromRedux}
          vocabSingleItem={findSingleVocab?.item}
        />
      )}
    </AppScreen>
  );
};

export default ScreenSearch;
