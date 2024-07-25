import { baseImagePath } from '../../utility/utility';
import HotspotGif from '../Hotspot/Hotspot';
import Button from '../UI/Button/Button';

const LandingRoom = ({
  image,
  title,
  buttonColor,
  hoverImage,
  navigateTo,
  className,
}) => {
  return (
    <>
      <div className={`relative group ${className}`}>
        <div className=" relative image-container grid grid-cols-1 grid-rows-1">
          <img
            src={baseImagePath(image)}
            alt={title}
            className="opacity-100 object-cover col-start-1 row-start-1 group-hover:opacity-30"
          />
          {hoverImage && (
            <img
              src={baseImagePath(hoverImage)}
              alt={title}
              className="opacity-0 object-cover col-start-1 row-start-1 group-hover:opacity-80"
            />
          )}
        </div>
        <div className="absolute inset-0 flex flex-col max-h-max items-center justify-center opacity-100 top-20 left-0 group-hover:opacity-0 transition-opacity duration-300">
          <HotspotGif />
          <Button
            btnTheme="custom"
            title={title}
            className={`text-white ${buttonColor} py-1 font-bold text-base px-4 opacity-80`}
          />
        </div>
        <div className="absolute inset-0 max-h-max flex flex-col items-center justify-center opacity-0 top-32 left-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            btnTheme="custom"
            title={'Explore Room'}
            className={`border-2 border-white text-white py-1 px-4 bg-transparent`}
            link={navigateTo}
          />
        </div>
      </div>
    </>
  );
};

export default LandingRoom;
