import LandingRoom from '../../components/LandingRoom/LandingRoom';
import Text from '../../components/UI/Text/Text';
import { routes } from '../../utility/constant';
import { useState } from 'react';
import VideoPlayer from '../../components/UI/VideoPlayer/VideoPlayer';
import {
  AISHA_DATA,
  CARLITA_DATA,
  EDDIE_DATA,
  ERIC_DATA,
  FRAN_DATA,
  MALIK_DATA,
} from './Landing.data';
import introVideo from '../../assets/videos/LandingPage_Intro_Desktop.mp4';
import Modal from '../../components/UI/Modal/Modal';
import UpArrow from '../../assets/images/icons/up-arrow.svg';

const Landing = () => {
  const [showBackground, setShowBackground] = useState(false);

  const handleVideoEnd = () => {
    setShowBackground(true);
  };

  return (
    <section className="bg-hero">
      {!showBackground ? (
        <VideoPlayer
          videoSrc={introVideo}
          onVideoEnd={handleVideoEnd}
        />
      ) : (
        <>
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
          <div className="mx-auto py-8">
            <div className="text-center max-w-screen-sm mx-auto">
              <Text as="caption">With SmartThings</Text>
              <Text as="title">Your home speaks you</Text>
              <Text>
                Select a room below to explore how SmartThings app seamlessly
                <br />
                integrates your home&apos;s smart devices.
              </Text>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <LandingRoom
                {...AISHA_DATA}
                buttonColor="bg-[rgba(82,193,186,0.80)]"
                navigateTo={routes.USE_CASE_AISHA}
              />

              <LandingRoom
                {...EDDIE_DATA}
                buttonColor="bg-[rgba(134,25,90,0.80)]"
                navigateTo={routes.USE_CASE_EDDIE}
              />
              <LandingRoom
                {...ERIC_DATA}
                buttonColor="bg-[rgba(135,156,129,0.80)]"
                navigateTo={routes.USE_CASE_ERIC}
              />
              <LandingRoom
                {...CARLITA_DATA}
                buttonColor="bg-[rgba(222,88,9,0.80)]"
                navigateTo={routes.USE_CASE_CARLITA}
              />
              <LandingRoom
                {...MALIK_DATA}
                buttonColor="bg-[rgba(167,224,181,0.80)]"
                navigateTo={routes.USE_CASE_MALIK}
              />
              <LandingRoom
                {...FRAN_DATA}
                buttonColor="bg-[rgba(93,171,225,0.80)]"
                navigateTo={routes.USE_CASE_FRAN}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Landing;
