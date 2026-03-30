import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const PlaySound = () => {
  return (
    <TouchableOpacity>
      <Image
        style={tw`w-[45px] h-[45px]`}
        source={require('../../app_assets/img/speakerIcon.png')}
      />
    </TouchableOpacity>
  );
};

export default PlaySound;
