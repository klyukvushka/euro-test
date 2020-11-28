import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "../../config/theme";
import { ArrowIcon } from "../Icons";

const SlideButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  background: #005fa3;
  border: none;
  border-radius: 0;
  padding: 22px;
  text-align: center;
  z-index: 5;
  top: auto;
  bottom: -139px;
  &:before {
    display: none;
  }
  &:hover,
  &:focus {
    background-color: #04538c;
  }
  &:active {
    background-color: #034473;
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
    <SlideButton className={className} onClick={onClick} style={{}}>
      <ArrowIcon style={{ transform: "rotate(180deg)" }} />
    </SlideButton>
  );
};

type Props = {
  className?: string;
  children: React.ReactNode;
  slide?: number;
};

const CarouselComponent: React.FC<Props> = ({ className, children, slide }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} slidesToShow={slide || 1} className={className}>
      {children}
    </Slider>
  );
};

export const Carousel = styled(CarouselComponent)`
  .slick-dots {
    text-align: left;
    bottom: -113px;
    li {
      width: 10px;
      height: 10px;
      margin: 0 40px 0 0;
      button {
        &:before {
          font-size: 11px;
          top: -5px;
          color: #005fa3;
          opacity: 0.4;
        }
      }
    }
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
  .slick-next {
    right: 0;
  }
  .slick-prev {
    left: auto;
    right: 60px;
  }
  .slick-disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;
