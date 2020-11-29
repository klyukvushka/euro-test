import React from "react";
import Slider, { CustomArrowProps, ResponsiveObject } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "../../../config/theme";
import { ArrowIcon } from "../Icons";
import { media } from "../../../config/media";

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
  ${media.tabletLandscape`
    width: 50px;
    height: 50px;
    padding: 15px;
    bottom: -129px;
  `}
  ${media.tabletPortrait`
      bottom: -155px;
  `}
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
  responsive?: ResponsiveObject[];
};

const CarouselComponent: React.FC<Props> = ({
  className,
  children,
  slide,
  responsive,
}) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      slidesToShow={slide || 1}
      responsive={responsive}
      className={className}
    >
      {children}
    </Slider>
  );
};

export const Carousel = styled(CarouselComponent)`
  .slick-dots {
    text-align: left;
    bottom: -113px;
    ${media.tabletPortrait`
      text-align: center;
      bottom: -50px;
  `}
    li {
      width: 10px;
      height: 10px;
      margin: 0 40px 0 0;
      ${media.tabletPortrait`
      margin-right: 20px;
     `}
      button {
        &:before {
          font-size: 11px;
          top: -5px;
          color: #005fa3;
          opacity: 0.4;
          ${media.tabletPortrait`
          font-size: 9px
          `}
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
    ${media.tabletLandscape`
      right: 50px;
  `}
    ${media.tabletPortrait`
      right: auto;
  `}
  }
  .slick-disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;
