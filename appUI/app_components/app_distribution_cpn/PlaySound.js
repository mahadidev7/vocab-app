import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import SoundPlayer from 'react-native-sound-player';

const PlaySound = ( audioPath ) => {

  const play = () => {
    try {
      // play the file tone.mp3
      // SoundPlayer.playSoundFile('', 'mp3');
      // or play from url
      SoundPlayer.playUrl(audioPath);
      // or play file from folder
      // SoundPlayer.playAsset(audioPath);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  console.log('=======audioPath=============================');
  console.log(audioPath);
  console.log('====================================');

  return (
    <>
      {audioPath ? (
        <TouchableOpacity onPress={() => play()}>
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
