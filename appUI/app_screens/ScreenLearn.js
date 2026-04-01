/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import AppScreen from '../app_components/app_distribution_cpn/AppScreen';
import AppHeader from '../app_components/app_distribution_cpn/AppHeader';
import VocabularyWrapper from '../app_components/app_my_cpn/VocabularyWrapper';
import WebviewArea from '../app_components/app_my_cpn/WebviewArea';
import { useSelector } from 'react-redux';
import {
  CatchOnlineDictionaryValue,
  CatchReadVocabData,
} from '../redux/slices/basketSlice';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert, BackHandler } from 'react-native';

const ScreenLearn = ({ route }) => {
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
    setVocabData(CatchReadVocabDataFromRedux || []);
  }, [CatchReadVocabDataFromRedux]);

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

  return (
    <AppScreen>
      <AppHeader {...route.params} />
      {Boolean(CatchOnlineDictionaryValueFromRedux) === false ||
      CatchOnlineDictionaryValueFromRedux?.value === 'own' ? (
        <>
          {!!vocabData?.length > 0 && (
            <VocabularyWrapper
              vocabData={vocabData}
              vocabSingleItem={vocabData[showVocabNumberOfArray]}
              showVocabNumberOfArray={showVocabNumberOfArray}
              setShowVocabNumberOfArray={setShowVocabNumberOfArray}
            />
          )}
        </>
      ) : (
        <WebviewArea value={CatchOnlineDictionaryValueFromRedux} vocabSingleItem={vocabData[showVocabNumberOfArray]} />
      )}
    </AppScreen>
  );
};

export default ScreenLearn;
