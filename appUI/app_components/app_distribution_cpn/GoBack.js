/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, BackHandler, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { Icon } from 'react-native-paper';
import { appColors } from '../../app_functions/Functions';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { setOnlineDictionaryValue, setReadVocabData } from '../../redux/slices/basketSlice';

const GoBack = ({ goBackWarning }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const confirmGoBack = () => {
    if (goBackWarning) {
      Alert.alert(
        'Are you sure you want to go back?',
        'Going back will interrupt your learning session. Sometime show a small ads but you can continue your learning session after watching the ads.',
        [
          {
            text: 'Go Back',
            onPress: () => {
              dispatch(setOnlineDictionaryValue(null));
              dispatch(setReadVocabData([]));
              navigation.goBack();
            },
          },
          { text: 'No', style: 'cancel' },
        ],
      );
    } else {
      navigation.goBack();
    }
  };

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
    <TouchableOpacity
      style={tw`bg-[#fff] rounded-[50px] p-2`}
      onPress={() => confirmGoBack()}
    >
      <Icon source="arrow-left" color={appColors?.primary} size={25} />
    </TouchableOpacity>
  );
};

export default GoBack;
