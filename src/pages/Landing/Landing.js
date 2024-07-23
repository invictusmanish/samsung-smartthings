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
} from './Landing.data';
import introVideo from '../../assets/videos/LandingPage_Intro_Desktop.mp4';
import Modal from '../../components/UI/Modal/Modal';
import UpArrow from '../../assets/images/icons/up-arrow.svg';

const Landing = () => {
  const [showBackground, setShowBackground] = useState(false);

  const handleVideoEnd = () => {
    setShowBackground(true);
  };
  const items = [
    <LandingRoom
      key="aisha"
      {...AISHA_DATA_MOB}
      className="bg-[rgba(82,193,186,0.80)]"
      navigateTo={routes.USE_CASE_AISHA}
    />,
    <LandingRoom
      key="carlita"
      {...CARLITA_DATA_MOB}
      className="bg-[rgba(222,88,9,0.80)]"
      navigateTo={routes.USE_CASE_CARLITA}
    />,
    <LandingRoom
      key="eddie"
      {...EDDIE_DATA_MOB}
      className="bg-[rgba(134,25,90,0.80)]"
      navigateTo={routes.USE_CASE_EDDIE}
    />,
    <LandingRoom
      key="malik"
      {...MALIK_DATA_MOB}
      className="bg-[rgba(167,224,181,0.80)]"
      navigateTo={routes.USE_CASE_MALIK}
    />,
    <LandingRoom
      key="eric"
      {...ERIC_DATA_MOB}
      className="bg-[rgba(135,156,129,0.80)]"
      navigateTo={routes.USE_CASE_ERIC}
    />,
    <LandingRoom
      key="fran"
      {...FRAN_DATA_MOB}
      className="bg-[rgba(93,171,225,0.80)]"
      navigateTo={routes.USE_CASE_FRAN}
    />,
  ];
  if (!showBackground) {
    return (
      <section>
        <VideoPlayer
          videoSrc={introVideo}
          onVideoEnd={handleVideoEnd}
        />
      </section>
    );
  }
  return (
    <section>
      <div className="lg:hidden bg-mobile-hero h-screen">
        <div className="text-center max-w-screen-sm mx-auto py-3">
          <Text
            as="custom"
            className="font-semibold"
          >
            With SmartThings
          </Text>
          <Text
            as="custom"
            className="font-bold text-2xl py-2"
          >
            Your home speaks you
          </Text>
          <Text>
            Select a room below to explore how SmartThings app seamlessly
            integrates your home&apos;s smart devices.
          </Text>
        </div>
        <Slider items={items} />
      </div>
      <div className="bg-hero hidden lg:block">
        <div className="pb-4 pt-8">
          <div className="text-center max-w-screen-sm mx-auto">
            <Text as="caption">With SmartThings</Text>
            <Text as="title">Your home speaks you</Text>
            <Text>
              Select a room below to explore how SmartThings app seamlessly
              <br />
              integrates your home&apos;s smart devices.
            </Text>
          </div>
          <div className="grid grid-cols-3">
            <LandingRoom
              key="aisha"
              {...AISHA_DATA}
              className="bg-[rgba(82,193,186,0.80)]"
              navigateTo={routes.USE_CASE_AISHA}
            />
            <LandingRoom
              key="eddie"
              {...EDDIE_DATA}
              className="bg-[rgba(134,25,90,0.80)]"
              navigateTo={routes.USE_CASE_EDDIE}
            />
            <LandingRoom
              key="eric"
              {...ERIC_DATA}
              className="bg-[rgba(135,156,129,0.80)]"
              navigateTo={routes.USE_CASE_ERIC}
            />
            <LandingRoom
              key="carlita"
              {...CARLITA_DATA}
              className="bg-[rgba(222,88,9,0.80)]"
              navigateTo={routes.USE_CASE_CARLITA}
            />
            <LandingRoom
              key="malik"
              {...MALIK_DATA}
              className="bg-[rgba(167,224,181,0.80)]"
              navigateTo={routes.USE_CASE_MALIK}
            />
            <LandingRoom
              key="fran"
              {...FRAN_DATA}
              className="bg-[rgba(93,171,225,0.80)]"
              navigateTo={routes.USE_CASE_FRAN}
            />
          </div>
        </div>
      </div>
      <Modal show={true}>
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
  );
};

export default Landing;
