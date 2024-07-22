import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red', right: 0 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green', left: 0 }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 2,
  slidesPerRow: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderComponent = ({ items }) => {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div
          key={index}
          className="px-2"
        >
          <div className="bg-red-100 p-4 border border-red-200 block w-1/2 mx-auto">
            {item}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
