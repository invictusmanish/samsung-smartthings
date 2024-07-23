import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10%', zIndex: 10 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '5%', zIndex: 10 }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.25,
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
          className="p-0"
        >
          <div className="py-2 block w-screen mx-auto">{item}</div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
