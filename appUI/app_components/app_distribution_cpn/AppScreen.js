import { View, StatusBar, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const AppScreen = ({ children, styleOfPage}) => {
  const appWidth = Dimensions.get('window').width;
  const appHeight = Dimensions.get('window').height;

  return (
    <>
      <SafeAreaView style={tw`w-full h-full flex-1 bg-[#00AAAC] flex-1`}>
        <StatusBar
          animated={true}
          backgroundColor="#00AAAC"
          barStyle="light-content"
          translucent={false}
        />
        <View style={tw`w-[${appWidth}px] h-[${appHeight}px]  bg-[#fff] `}>
          <ScrollView style={tw`w-full h-full ${styleOfPage}`}>{children}</ScrollView>
        </View>
      </SafeAreaView>
      {/* {isGoogleAds && <Ads_BannerAd_CP />} */}
    </>
  );
};

export default AppScreen;
