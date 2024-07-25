import { useState } from 'react';
import VideoPlayer from '../../../components/UI/VideoPlayer/VideoPlayer';
import UpArrow from '../../../assets/images/icons/up-arrow.svg';
import backgroundImage from '../../../assets/images/Usecases/carlita/Carlita-BG.jpg';
import second_bg from '../../../assets/images/Usecases/carlita/carlita_second.png';
import introVideo from '../../../assets/images/Usecases/carlita/Carlita_Intro.mp4';
import secondVideo from '../../../assets/images/Usecases/carlita/Carlita_second_video.mp4';
import Text from '../../../components/UI/Text/Text';
import HotspotGif from '../../../components/Hotspot/Hotspot';
import Modal from '../../../components/UI/Modal/Modal';
import AppLayout from '../../../components/AppLayout';
import Button from '../../../components/UI/Button/Button';
import { baseImagePath } from '../../../utility/utility';

function Carlita() {
  const [showBackground, setShowBackground] = useState(false);
  const [showText, setShowText] = useState(false);
  const [playSecondVideo, setPlaySecondVideo] = useState(false);
  const [showHotspots, setShowHotspots] = useState(false);
  const [isModal, setismodal] = useState(true);

  const handleVideoEnd = () => {
    setShowBackground(true);
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
      setPlaySecondVideo(true);
    }, 5000);
  };

  const handleSecondVideoEnd = () => {
    setPlaySecondVideo(false);
    setShowHotspots(true);
  };

  const handleHotspotClick = (hotspot) => {
    console.log(`${hotspot} hotspot clicked`);
  };

  const replyvideo = () => {
    setShowText(false);
    setPlaySecondVideo(true);
  }
  return (
    <AppLayout>
    <div className="h-screen w-screen relative">
      {!showBackground ? (
        <VideoPlayer
          videoSrc={introVideo}
          onVideoEnd={handleVideoEnd}
        />
      ) : playSecondVideo ? (
        <VideoPlayer
          videoSrc={secondVideo}
          onVideoEnd={handleSecondVideoEnd}
        />
      ) : (
        <div
          className="bg-cover bg-center h-full w-full"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {showText && (
            <div className="absolute top-1/4 left-0 px-10 animate-slideInOut space-y-4">
              <Text
                as="caption"
                className="text-white"
              >
                Self Care
              </Text>
              <Text
                as="title"
                className="text-white"
              >
                Enhance your
                <br />
                wellness
              </Text>
              <Text
                as="usecase-fading-text"
                className="text-white"
              >
                Discover how SmartThings seamlessly connects
                <br />
                your watch, screens, music, and more to create
                <br />
                the perfect workout environment.
              </Text>
            </div>
          )}

          {showHotspots && (
            <>
              <div
                className="bg-cover bg-center h-full w-full"
                style={{ backgroundImage: `url(${second_bg})` }}
              >
                <Modal show={isModal}  onClose={() => setismodal(!isModal)}>
                  <div className='py-4 px-4 flex justify-center items-center'>
                <img
                 src={baseImagePath('Icon-LP-SmartthingsLogo.png')}
                alt="SmartThings"
                className="w-9 h-9 rounded-full"
                />
                </div>
                  <img
                    className="mx-auto"
                    src={UpArrow}
                    alt={'Arrow'}
                  />
                  <div className='py-2 px-2 flex justify-center items-center'>
                  <Text className="font-bold text-center">
                    Learn more about health routines by 
                    <br/>
                    clicking on each highlighted hotspot
                  </Text>
                  </div>
                  <div className='py-4 px-4 flex justify-center items-center'>
                  <Button
                   title="Continue"
                   onClick={() => setismodal(!isModal)}
                   //onClick={navigateApp}
                  />
                  </div>
                  <hr className='border-bottom: 1px solid black w-full padding: 0 10px 0 10px'/>
                  <div className='py-4 px-4 flex justify-center items-center'>
                     
                     </div>
                     <Text className="font-bold text-center">
                      Want to watch that again? Replay below.
                    </Text>
                    <Button
                     title="Replay"
                     onClick={() => replyvideo()}
                  />
                </Modal>
                <div
                  className="absolute"
                  style={{ top: '63%', left: '41%' }}
                >
                  <HotspotGif
                    text={'Watch'}
                    onClick={() => handleHotspotClick('Watch')}
                  />
                </div>
                <div
                  className="absolute"
                  style={{ top: '51%', left: '56%' }}
                >
                  <HotspotGif onClick={() => handleHotspotClick('Z Flip')} />
                </div>
                <div
                  className="absolute"
                  style={{ top: '72%', left: '75%' }}
                >
                  <HotspotGif onClick={() => handleHotspotClick('Sero')} />
                </div>
                <div
                  className="absolute"
                  style={{ top: '62.5%', left: '30.5%' }}
                >
                  <HotspotGif
                    onClick={() => handleHotspotClick('Smart Plug')}
                  />
                </div>
                <div
                  className="absolute"
                  style={{ top: '24%', left: '21.5%' }}
                >
                  <HotspotGif onClick={() => handleHotspotClick('Frame')} />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
    </AppLayout>
  );
}

export default Carlita;
