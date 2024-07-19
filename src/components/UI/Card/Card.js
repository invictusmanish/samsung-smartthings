import { baseImagePath } from '../../../utility/utility';
import Button from '../Button/Button';
import Text from '../Text/Text';

const Card = ({ image, caption, title, description, ctaText, ctaLink }) => {
  return (
    <div className=" w-full h-[390] group overflow-hidden shadow-lg bg-white relative flex flex-col rounded-[20px] hover:border-[#016bea] hover:border-[1.75px]">
      <img
        className="w-full h-52 object-contain px-5"
        src={baseImagePath(image)}
        alt="Card Image"
      />
      <div className=" text-black">
        <Text
          as="custom"
          className="text-base leading-4 font-bold font-SamsungOne px-6"
        >
          {title}
        </Text>
        <Text
          as="custom"
          className="text-xl leading-6 font-bold py-2 px-6"
        >
          {caption}
        </Text>
        <Text
          as="custom"
          className="text-sm py-1 font-SamsungOne px-6 lg:px-3"
        >
          {description}
        </Text>
      </div>
      <div className="mt-auto py-4 pb-8">
        <Button
          link={ctaLink}
          title={ctaText ? ctaText : 'See all in action'}
        />
      </div>
    </div>
  );
};

export default Card;
