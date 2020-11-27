import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "../../config/theme";
import { ArrowIcon } from "../Icons";

type Props = {
  className?: string;
};

const SlideButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  background: #005fa3;
  border: none;
  border-radius: 0;
  padding: 22px;
  text-align: center;
  &:before {
    display: none;
  }
`;

const NextArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <SlideButton className={className} onClick={onClick}>
      <ArrowIcon />
    </SlideButton>
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <SlideButton className={className} onClick={onClick}>
      <ArrowIcon style={{ transform: "rotate(180deg)" }} />
    </SlideButton>
  );
};

const CarouselComponent: React.FC<Props> = ({ className }) => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className={className}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

export const Carousel = styled(CarouselComponent)`
  .slick-dots {
    text-align: left;
    li {
      width: 10px;
      height: 10px;
      margin: 0 40px 0 0;
      button {
        &:before {
          font-size: 10px;
          top: -4px;
          color: #005fa3;
          opacity: 0.4;
        }
      }
    }
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
`;
