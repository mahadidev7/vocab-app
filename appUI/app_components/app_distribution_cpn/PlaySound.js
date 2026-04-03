import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const PlaySound = ({ audioPath = false }) => {
  return (
    <>
      {audioPath ? (
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={tw`w-[45px] h-[45px]`}
            source={require('../../app_assets/img/speakerIcon.png')}
          />
        </TouchableOpacity>
      ) : (
        <Image
          style={tw`w-[45px] h-[45px]`}
          source={require('../../app_assets/img/notspeakerIcon.png')}
        />
      )}
    </>
  );
};

export default PlaySound;
