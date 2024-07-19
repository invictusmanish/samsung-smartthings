import LandingRoom from '../../components/LandingRoom/LandingRoom';
import Text from '../../components/UI/Text/Text';
import { routes } from '../../utility/constant';
import {
  AISHA_DATA,
  CARLITA_DATA,
  EDDIE_DATA,
  ERIC_DATA,
  FRAN_DATA,
  MALIK_DATA,
} from './Landing.data';

const Landing = () => {
  return (
    <section className="bg-hero">
      <div className="px-4 mx-auto py-8">
        <div className="text-center max-w-screen-sm mx-auto">
          <Text as="caption">With SmartThings</Text>
          <Text as="title">Your home speaks you</Text>
          <Text>
            Select a room below to explore how SmartThings app seamlessly
            integrates your home&apos;s smart devices.
          </Text>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <LandingRoom
            {...AISHA_DATA}
            className="bg-[rgba(82,193,186,0.80)]"
            navigateTo={routes.USE_CASE_AISHA}
          />

          <LandingRoom
            {...EDDIE_DATA}
            className="bg-[rgba(134,25,90,0.80)]"
            navigateTo={routes.USE_CASE_EDDIE}
          />
          <LandingRoom
            {...ERIC_DATA}
            className="bg-[rgba(135,156,129,0.80)]"
            navigateTo={routes.USE_CASE_ERIC}
          />
          <LandingRoom
            {...CARLITA_DATA}
            className="bg-[rgba(222,88,9,0.80)]"
            navigateTo={routes.USE_CASE_CARLITA}
          />
          <LandingRoom
            {...MALIK_DATA}
            className="bg-[rgba(167,224,181,0.80)]"
            navigateTo={routes.USE_CASE_MALIK}
          />
          <LandingRoom
            {...FRAN_DATA}
            className="bg-[rgba(93,171,225,0.80)]"
            navigateTo={routes.USE_CASE_FRAN}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
