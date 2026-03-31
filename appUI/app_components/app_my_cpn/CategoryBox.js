import { View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import AppText from '../app_distribution_cpn/AppText';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setReadVocabData } from '../../redux/slices/basketSlice';
const CategoryBox = ({ name, arrayData }) => {
  const [allPage, setAllPage] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function paginate(array, pageNumber, itemsPerPage = 15) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  }

  function totalPages(array, itemsPerPage = 15) {
    const pArray = [];
    const getTotalPage = Math.ceil(array?.length / itemsPerPage);
    for (let i = 0; i < getTotalPage; i++) {
      pArray.push(i + 1);
    }
    return pArray;
  }

  const keepVocabHandler = currentPageNumber => {
    const getVocabArray = paginate(arrayData, currentPageNumber, 15);
    dispatch(setReadVocabData(getVocabArray));
    navigation.navigate('Learn');
  };

  useEffect(() => {
    const totalPageArray = totalPages(arrayData);
    setAllPage(totalPageArray);
  }, [arrayData]);

  return (
    <View
      style={tw`p-2 rounded-lg flex flex-row items-center justify-between gap-1 flex-wrap`}
    >
      {allPage &&
        allPage.map((item, index) => (
          <TouchableOpacity
            style={tw`${
              name === 'basic'
                ? 'bg-[#65A7BC]'
                : name === 'Advance'
                ? 'bg-[#F67C5D]'
                : name === 'phrases'
                ? 'bg-[#264653]'
                : 'bg-[#6973BD]'
            } p-2 py-6 rounded-lg w-[90px] flex items-center justify-center gap-2`}
            key={index}
            onPress={() => keepVocabHandler(item)}
          >
            <AppText
              text={item}
              style="text-[#000] text-[20px] border border-white bg-white rounded-[50px] p-2"
            />
            <AppText
              text={'   Candy'}
              style="text-white text-center text-[14px]"
            />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default CategoryBox;
