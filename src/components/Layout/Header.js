import { NavLink } from 'react-router-dom';
import Card from '../UI/Card/Card';
import Text from '../UI/Text/Text';
import Dropdown from '../UI/Dropdown/Dropdown';
import {
  AISHA_DATA,
  CARLITA_DATA,
  EDDIE_DATA,
  ERIC_DATA,
  FRAN_DATA,
  MALIK_DATA,
} from './Header.data';
import { routes } from '../../utility/constant';
import { baseImagePath } from '../../utility/utility';
import Button from '../UI/Button/Button';
import { useEffect, useState } from 'react';
import Modal from '../UI/Modal/Modal';

function Header() {
  const [isModal, setismodal] = useState(false);
  const [mobileOS, setMobileOS] = useState(null);
  const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'IOS';
    }

    if (/android/i.test(userAgent)) {
      return 'Andriod';
    }
    return 'unknown';
  };

  useEffect(() => {
    const os = getMobileOperatingSystem();
    setMobileOS(os);
  }, []);

  const navigateApp = () => {
    mobileOS == 'IOS'
      ? window.open(
          'https://apps.apple.com/us/app/smartthings/id1222822904',
          '_blank',
        )
      : window.open(
          'https://play.google.com/store/apps/details?id=com.samsung.android.oneconnect&hl=en_US&pli=1',
          '_blank',
        );
  };
  const exploreOptions = [
    {
      content: (
        <div className="py-4 pt-10 lg:hidden">
          <Text
            as="title"
            className="text-center"
          >
            Connect Your Life
          </Text>
        </div>
      ),
    },
    {
      content: (
        <div className="flex justify-center items-center mb-5 gap-6 lg:hidden">
          <div>
            <Button
              title="Download App   &#x2197;"
              onClick={navigateApp}
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="py-4 lg:hidden text-center">
          <Button
            title="Learn more &#x2197;"
            btnTheme="custom"
            className="font-semibold underline"
          />
        </div>
      ),
    },
    {
      content: (
        <div className="py-4 pt-10">
          <Text
            as="title"
            className="text-center"
          >
            Explore More Rooms
          </Text>
        </div>
      ),
    },
    {
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2 sm:px-6 pb-20 text-center">
          <Card
            {...AISHA_DATA}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...EDDIE_DATA}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...ERIC_DATA}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...CARLITA_DATA}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...MALIK_DATA}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...FRAN_DATA}
            ctaLink={routes.USE_CASE_CARLITA}
          />
        </div>
      ),
    },
  ];
  return (
    <header className="bg-white h-[65px] px-6 flex justify-between items-center">
      <NavLink
        to={'/'}
        className={`flex items-center`}
      >
        <img
          src={baseImagePath('Icon-LP-SmartthingsLogo.png')}
          alt="SmartThings"
          className="w-9 h-9 rounded-full"
        />
        <Text as="subTitle">SmartThings</Text>
      </NavLink>
      <div className="flex items-center gap-2">
        <Button
          title={'Download App'}
          btnTheme="transparent"
          className="hidden lg:block"
          onClick={() => setismodal(!isModal)}
        />
        <Dropdown
          options={exploreOptions}
          fullWidth={true}
          dropdownListClassName={`bg-gray-100 py-2 px-2`}
          title={'Explore'}
        />
      </div>
      <Modal
        show={isModal}
        onClose={() => setismodal(!isModal)}
      >
        <div className="px-14">
          <div className="text-center  mb-4">
            <Text as="subTitle">
              Download the <br /> SmartThings app
            </Text>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <img
                src={baseImagePath('download/qr.png')}
                className="w-96 h-27"
              />
            </div>
            <div className="text-left">
              <Text>
                Use your phone as personal camera to help monitor and improve
                your form during workouts
              </Text>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="mr-3">
              <a
                href={
                  'https://play.google.com/store/apps/details?id=com.samsung.android.oneconnect&hl=en_US&pli=1'
                }
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <img
                  className=""
                  src={baseImagePath(
                    'dropdown/Icon-DownloadApp-Googleplay-D.png',
                  )}
                  alt="Play Store"
                />
              </a>
            </div>
            <div className="ml-3">
              <a
                href={'https://apps.apple.com/us/app/smartthings/id1222822904'}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <img
                  className=""
                  src={baseImagePath(
                    'dropdown/Icon-DownloadApp-Appstore-D.png',
                  )}
                  alt="App Store"
                />
              </a>
            </div>
          </div>
          <div className="text-center  mb-4">
            <Button
              title="Learn more &#x2197;"
              btnTheme="custom"
              className="font-semibold underline"
            />
          </div>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
