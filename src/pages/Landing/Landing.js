import LandingRoom from '../../components/LandingRoom/LandingRoom';
import Slider from '../../components/Slider/Slider';
import Text from '../../components/UI/Text/Text';
import { routes } from '../../utility/constant';
import { useState } from 'react';
import VideoPlayer from '../../components/UI/VideoPlayer/VideoPlayer';
import {
  AISHA_DATA,
  AISHA_DATA_MOB,
  CARLITA_DATA,
  CARLITA_DATA_MOB,
  EDDIE_DATA,
  EDDIE_DATA_MOB,
  ERIC_DATA,
  ERIC_DATA_MOB,
  FRAN_DATA,
  FRAN_DATA_MOB,
  MALIK_DATA,
  MALIK_DATA_MOB,
  LANDING_DATA,
} from './Landing.data';
import desktopIntroVideo from '../../assets/videos/LandingPage_Intro_Desktop.mp4';
import mobileIntroVideo from '../../assets/videos/LandingPage_Mobile.mp4';
import Modal from '../../components/UI/Modal/Modal';
import UpArrow from '../../assets/images/icons/up-arrow.svg';
import AppLayout from '../../components/AppLayout';
import { baseImagePath } from '../../utility/utility';

const Landing = () => {
  const [showBackground, setShowBackground] = useState(false);

  const handleVideoEnd = () => {
    console.log('bg', showBackground);
    setShowBackground(true);
  };
  const items = [
    <LandingRoom
      key="aisha"
      {...AISHA_DATA_MOB}
      buttonColor="bg-[rgba(82,193,186,0.80)]"
      navigateTo={routes.USE_CASE_AISHA}
    />,
    <LandingRoom
      key="carlita"
      {...CARLITA_DATA_MOB}
      buttonColor="bg-[rgba(222,88,9,0.80)]"
      navigateTo={routes.USE_CASE_CARLITA}
    />,
    <LandingRoom
      key="eddie"
      {...EDDIE_DATA_MOB}
      buttonColor="bg-[rgba(134,25,90,0.80)]"
      navigateTo={routes.USE_CASE_EDDIE}
    />,
    <LandingRoom
      key="malik"
      {...MALIK_DATA_MOB}
      buttonColor="bg-[rgba(167,224,181,0.80)]"
      navigateTo={routes.USE_CASE_MALIK}
    />,
    <LandingRoom
      key="eric"
      {...ERIC_DATA_MOB}
      buttonColor="bg-[rgba(135,156,129,0.80)]"
      navigateTo={routes.USE_CASE_ERIC}
    />,
    <LandingRoom
      key="fran"
      {...FRAN_DATA_MOB}
      buttonColor="bg-[rgba(93,171,225,0.80)]"
      navigateTo={routes.USE_CASE_FRAN}
    />,
  ];
  if (!showBackground) {
    return (
      <AppLayout isShowHeader={true}>
        <section>
          <div className="hidden lg:block video-container">
            <VideoPlayer
              videoSrc={desktopIntroVideo}
              onVideoEnd={handleVideoEnd}
            />
          </div>
          <div className="lg:hidden h-screen video-container">
            <VideoPlayer
              videoSrc={mobileIntroVideo}
              onVideoEnd={handleVideoEnd}
            />
          </div>
        </section>
      </AppLayout>
    );
  }
  return (
    <AppLayout>
      <section>
        <div className="lg:hidden h-screen">
          <div className="text-center max-w-screen-sm mx-auto py-3">
            <Text
              as="custom"
              className="font-semibold"
            >
              {LANDING_DATA.caption}
            </Text>
            <Text
              as="custom"
              className="font-bold text-2xl py-2"
            >
              {LANDING_DATA.title}
            </Text>
            <Text>{LANDING_DATA.description}</Text>
          </div>
          <Slider items={items} />
        </div>
        <div className="h-screen hidden lg:block">
          <div className="pb-4 pt-8">
            <div className="text-center w-[680px] mx-auto">
              <Text as="caption">{LANDING_DATA.caption}</Text>
              <Text as="title">{LANDING_DATA.title}</Text>
              <Text>
                Select a room below to explore how SmartThings app <br />
                seamlessly integrates your home&apos;s smart devices.
              </Text>
            </div>
            <div className="ml-[85px] absolute grid grid-cols-3">
              <LandingRoom
                key="aisha"
                {...AISHA_DATA}
                buttonColor="bg-[rgba(82,193,186,0.80)]"
                navigateTo={routes.USE_CASE_AISHA}
                className={'-top-20 left-6'}
              />
              <img
                src={baseImagePath(
                  'landing-page/LP-Shadow-Isometric-517x313-D.png',
                )}
                alt={'shadow'}
                className="opacity-100 absolute -z-[1] object-cover group-hover:opacity-30 -top-20 left-6"
              />
              <LandingRoom
                key="eddie"
                {...EDDIE_DATA}
                buttonColor="bg-[rgba(134,25,90,0.80)]"
                navigateTo={routes.USE_CASE_EDDIE}
                className={'left-32'}
              />
              <img
                src={baseImagePath(
                  'landing-page/LP-Shadow-Isometric-517x313-D.png',
                )}
                alt={'shadow'}
                className="opacity-100 absolute -z-[1] object-cover group-hover:opacity-30  left-[480px]"
              />
              <LandingRoom
                key="eric"
                {...ERIC_DATA}
                buttonColor="bg-[rgba(135,156,129,0.80)]"
                navigateTo={routes.USE_CASE_ERIC}
                className={'left-48 -top-14'}
              />
              <img
                src={baseImagePath(
                  'landing-page/LP-Shadow-Isometric-517x313-D.png',
                )}
                alt={'shadow'}
                className="opacity-100 absolute -z-[1] object-cover group-hover:opacity-30 -top-[60px] -right-[356px]"
              />
              <LandingRoom
                key="carlita"
                {...CARLITA_DATA}
                buttonColor="bg-[rgba(222,88,9,0.80)]"
                navigateTo={routes.USE_CASE_CARLITA}
                className={'-top-28'}
              />
              <img
                src={baseImagePath(
                  'landing-page/LP-Shadow-Isometric-517x313-D.png',
                )}
                alt={'shadow'}
                className="opacity-100 absolute -z-[1] object-cover group-hover:opacity-30 top-[200px]"
              />
              <LandingRoom
                key="malik"
                {...MALIK_DATA}
                buttonColor="bg-[rgba(167,224,181,0.80)]"
                navigateTo={routes.USE_CASE_MALIK}
                className={'-top-10 left-20'}
              />
              <img
                src={baseImagePath(
                  'landing-page/LP-Shadow-Isometric-517x313-D.png',
                )}
                alt={'shadow'}
                className="opacity-100 absolute -z-[1] object-cover group-hover:opacity-30 top-[274px] left-[436px]"
              />
              <LandingRoom
                key="fran"
                {...FRAN_DATA}
                buttonColor="bg-[rgba(93,171,225,0.80)]"
                navigateTo={routes.USE_CASE_FRAN}
                className={'left-44 -top-20'}
              />
              <img
                src={baseImagePath(
                  'landing-page/LP-Shadow-Isometric-517x313-D.png',
                )}
                alt={'shadow'}
                className="opacity-100 absolute -z-[1] object-cover group-hover:opacity-30 top-[230px] -right-[338px]"
              />
            </div>
          </div>
        </div>
        <Modal show={false}>
          <img
            className=" mx-auto mb-4 top-40"
            src={UpArrow}
            alt={'Arrow'}
          />
          <Text className="font-bold text-center">
            Select a room on this page to see how
            <br /> SmartThings routines help bring your
            <br /> home to life
          </Text>
        </Modal>
      </section>
    </AppLayout>
  );
};

export default Landing;
