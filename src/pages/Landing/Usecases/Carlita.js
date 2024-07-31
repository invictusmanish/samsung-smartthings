import { useState } from 'react';
import VideoPlayer from '../../../components/UI/VideoPlayer/VideoPlayer';
import UpArrow from '../../../assets/images/Usecases/carlita/Icon-clickSTlogo-D.png';
import backgroundImage from '../../../assets/images/Usecases/carlita/Carlita-BG.jpg';
import second_bg from '../../../assets/images/Usecases/carlita/carlita_second.png';
import introVideo from '../../../assets/images/Usecases/carlita/Carlita_Intro.mp4'; 
import secondVideo from '../../../assets/images/Usecases/carlita/Carlita_second_video.mp4';
import musicFrame from '../../../assets/images/Usecases/carlita/ST_MusicFrame_Video.mp4';
import Text from '../../../components/UI/Text/Text';
import HotspotGif from '../../../components/Hotspot/Hotspot';
import Modal from '../../../components/UI/Modal/Modal';
import AppLayout from '../../../components/AppLayout';
import Button from '../../../components/UI/Button/Button';
//import { baseImagePath } from '../../../utility/utility';
import { CARLITA_DATA_MUSICFRAME, CARLITA_DATA_SAMRTPLUG, CARLITA_DATA_SERO,CARLITA_DATA_WATCH,CARLITA_DATA_ZFLIP }  from '../../../components/Layout/Carlita.data';
import Switch from "react-switch";
import WatchDial from './WatchDial';

function Carlita() {
  const [showBackground, setShowBackground] = useState(false);
  const [showText, setShowText] = useState(false);
  const [playSecondVideo, setPlaySecondVideo] = useState(false);
  const [showHotspots, setShowHotspots] = useState(false);
  const [isModal, setismodal] = useState(false);
  const [isHotspot, setIsHospot] = useState(false);
  const [hotSpotValue, setHotSpotValue] = useState(null);
  const [isToggled, setIsToggled]  = useState(false);
  const [galaxyDescription, setGalaxyDescription]  = useState(CARLITA_DATA_WATCH.galaxyDetails[0]?.description);
  const [galaxyTitle, setGalaxyTitle]  = useState(CARLITA_DATA_WATCH.galaxyDetails[0]?.title);
  const [zFlipDescription, setZflipDescription]  = useState(CARLITA_DATA_ZFLIP.galaxyZFlipDetails[0]?.description);
  const [zFlipTitle, setZflipTitle]  = useState(CARLITA_DATA_ZFLIP.galaxyZFlipDetails[0]?.title);

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
    setismodal(true);
  };

  const handleHotspotClick = (hotspot) => {
    setismodal(true);
    setIsHospot(true);
    setHotSpotValue(hotspot)
    console.log(`${hotspot} hotspot clicked`);    
  };

  const replyvideo = () => {
    setShowText(false);
    setPlaySecondVideo(true);
    setismodal(true);
  }

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
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
    <div className='flex justify-between items-center relative'>
    <Modal show={isModal}  onClose={() => { 
       setIsHospot(false);
       setismodal(!isModal);}}
       isHeader={isHotspot}
       >
        { isHotspot  && hotSpotValue == 'Smart Plug' ? (<div> 
        <div><Text className="font-bold text-center">{CARLITA_DATA_SAMRTPLUG.title}</Text></div>
        <div><Text as="title">{CARLITA_DATA_SAMRTPLUG.caption}</Text></div>
        <div className='py-4 px-4 flex justify-center items-center'>
        <img 
                 src={
                  CARLITA_DATA_SAMRTPLUG.image}
                  alt="Smart Plug"
                />
         </div>
        <div><Text className="font-sans text-center">{CARLITA_DATA_SAMRTPLUG.description}</Text></div>
        </div>  ) :  hotSpotValue == 'Sero' ? 
           (<div> 
            <div><Text className="font-bold text-center">{CARLITA_DATA_SERO.title}</Text></div>
            <div><Text as="title">{CARLITA_DATA_SERO.caption}</Text></div>
            <div className='py-0 px-2'>
            <ul>
            {CARLITA_DATA_SERO.description.map((item, index) => <li key={index}><Text className="text-left">{`\u2981 ${item}`}</Text></li>)}
            </ul>
             </div>
             <div className="item-left">

             <div className='py-2 flex justify-center items-center'>
              <Text className="font-bold">{CARLITA_DATA_SERO.footer}</Text>
              <Switch className='mt-auto pb-4' height={20} width={40} onChange={handleToggle} checked={ isToggled ? true: false} uncheckedIcon />
             </div>
             </div> 
            </div>  ) :  hotSpotValue == 'Frame' ? 
           (<div> 
            <div><Text className="font-bold text-center text-xs">{CARLITA_DATA_MUSICFRAME.title}</Text></div>
            <div><Text as="caption">{CARLITA_DATA_MUSICFRAME.caption}</Text></div>
            <div className='py-4 px-4 grid grid-cols-2 items-center'>
              <div>               
              <VideoPlayer
              videoSrc={musicFrame}
              onVideoEnd={handleSecondVideoEnd}
              isVideo = {true}
                />
              </div>
            <div className='ps-8'>
            <ul>
            {CARLITA_DATA_MUSICFRAME.description.map((item, index) => <li key={index}><p className="text-xs text-left">{`\u2981 ${item}`}</p></li>)}
            </ul>
             </div>
             </div>
            </div>  )  :  hotSpotValue == 'Watch' ? 
           (<div> 
            <div><Text className="font-bold text-center text-xs">{CARLITA_DATA_WATCH.title}</Text></div>
            <div>
              <Text as="subTitle">{galaxyTitle}</Text>            
              </div>
            <div className='py-4 px-4 flex justify-center '>    
            <ul>
            {galaxyDescription?.map((item, index) => (
              <li key={index}><p className="text-xs text-left">{`\u2981 ${item}`}</p></li>))}
            </ul>
          </div>         
            <div className='py-4 px-4  flex justify-between'>      
            {CARLITA_DATA_WATCH.galaxyDetails.map((item, index) => 
            <img  key={index}
               src={item?.image}
               alt="image"  
               onClick={ () => {setGalaxyDescription(item?.description); setGalaxyTitle(item?.title);}}            
             />   
           )}
             
            </div>
            </div>  )  :  hotSpotValue == 'Z Flip' ? 
           (<div> 
            <div><Text className="font-bold text-center text-xs">{CARLITA_DATA_ZFLIP.title}</Text></div>
            <div>
              <Text as="subTitle">{zFlipTitle}</Text>            
              </div>
            <div className='py-4 px-4 flex justify-center '>  
            <div>
              <Text >{zFlipDescription}</Text>            
              </div>  
          </div>         
            <div className='py-4 px-4  flex justify-between'>      
            {CARLITA_DATA_ZFLIP.galaxyZFlipDetails.map((item, index) => 
            <img  key={index}
               src={item?.image}
               alt="image"  
               onClick={ () => {setZflipDescription(item?.description); setZflipTitle(item?.title);}}                   
             /> ,
            
           )}   
                    
            </div>
            
            </div>  ) 
              :  !isHotspot  ? (  <>  
              <div className='py-4 px-4 flex justify-center items-center'>
                </div>
                  <img
                    className="mx-auto"
                    src={UpArrow}
                    alt={'Arrow'}
                    width={45}
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
              
                  </>
              
              ) : <></>
            } 
                </Modal>
                {isModal && hotSpotValue == 'Watch' && <WatchDial></WatchDial>}
                </div>
    </AppLayout>
  );
}

export default Carlita;
