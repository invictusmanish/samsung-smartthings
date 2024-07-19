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

function Header() {
  const exploreOptions = [
    {
      content: (
        <div className="py-4 pt-10">
          <Text
            as="title"
            className="text-center"
          >
            Explore Rooms
          </Text>
        </div>
      ),
    },
    {
      content: (
        <div className="flex justify-center px-2 sm:px-6 pb-20 gap-4 text-center">
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
    <header className="bg-white py-4 px-4 flex justify-between items-center">
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
          className="hidden md:block"
        />
        <Dropdown
          options={exploreOptions}
          fullWidth={true}
          dropdownListClassName={`bg-gray-100 py-2 px-2`}
          title={'Explore'}
        />
      </div>
    </header>
  );
}

export default Header;
