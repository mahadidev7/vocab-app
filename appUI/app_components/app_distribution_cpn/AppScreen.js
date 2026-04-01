import { View, StatusBar, Dimensions, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import Drawer from './Drawer';
import BookMarkArea from '../app_my_cpn/BookMarkArea';
import OnlineDictionaryArea from '../app_my_cpn/OnlineDictionaryArea';
import {
  CatchBookMarkDrawer,
  CatchOnlineDictionaryDrawer,
} from '../../redux/slices/basketSlice';

const AppScreen = ({ children, styleOfPage }) => {
  const CatchOnlineDictionaryDrawerFromRedux = useSelector(
    CatchOnlineDictionaryDrawer,
  );
  const CatchBookMarkDrawerFromRedux = useSelector(CatchBookMarkDrawer);

  // const appWidth = Dimensions.get('window').width;
  // const appHeight = Dimensions.get('window').height;

  return (
    <>
      <SafeAreaView style={tw`w-full h-full flex-1 bg-[#00AAAC]`}>
        <StatusBar
          animated={true}
          backgroundColor="#00AAAC"
          barStyle="light-content"
          translucent={false}
        />
        <View style={tw`w-full h-full bg-[#fff] relative`}>
          {/* main body  */}
          <ScrollView style={tw`w-full h-full ${styleOfPage}`}>
            {children}
          </ScrollView>
          {/* bookmark drawer */}
          {CatchBookMarkDrawerFromRedux && (
            <Drawer>
              <BookMarkArea />
            </Drawer>
          )}
          {/* online dictionary drawer */}
          {CatchOnlineDictionaryDrawerFromRedux && (
            <Drawer>
              <OnlineDictionaryArea />
            </Drawer>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default AppScreen;
