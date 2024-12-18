import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles/Carousel.scss';

const Carousel = ({ slides, slidesToShow, dots }) => {

  const sliderSettings = {
    dots: dots,
    arrows: false,
    infinite: true,
    draggable: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoPlay: true,
    customPaging: () => <div className="custom-dot" />,
  };

  return (
      <Slider {...sliderSettings}>
        {slides.map((slide, i) => <div key={`${slide.id}-${i}`}>{slide.component}</div>)}
      </Slider>
  );
}

export default Carousel;