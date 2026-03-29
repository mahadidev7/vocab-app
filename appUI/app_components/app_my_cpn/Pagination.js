import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { getPaginationNumbers } from '../../app_functions/Functions';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pages = getPaginationNumbers(
    totalItems,
    itemsPerPage,
    currentPage
  );

  console.log('==pages==sdsd================================');
  console.log(pages);
  console.log('====================================');
  return (
    <View>
      {pages.map((page) => (
        <TouchableOpacity
          key={page}
          onPress={() => setCurrentPage(page)}
        >
          <Text>{String(page)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Pagination;