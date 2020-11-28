import React from "react";
import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { Container, Subtitle } from "../../components/styled";
import { styled } from "../../config/theme";
import slide from "../../images/slide.jpg";

type Props = {
  className?: string;
};

const fakedata = [
  {
    id: 1,
    title: "Бухгалтерские услуги в Санкт-Петербурге",
    src: `${slide}`,
  },
  {
    id: 2,
    title: "Брокерские услуги в Санкт-Петербурге",
    src: `${slide}`,
  },
  {
    id: 3,
    title: "Бухгалтерские услуги в Санкт-Петербурге",
    src: `${slide}`,
  },
];

const BannersComponent: React.FC<Props> = ({ className }) => {
  return (
    <Carousel className={className}>
      {fakedata.map((item: { id: number; src: string; title: string }) => (
        <div key={item.id}>
          <div
            style={{ backgroundImage: `url(${item.src})` }}
            className="slide-img"
          >
            <Container key={item.id}>
              <Subtitle className="slide-title">{item.title}</Subtitle>
              <Button type="button" text="Наша презентация" />
            </Container>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export const Banners = styled(BannersComponent)`
  .slick-dots {
    text-align: center;
    bottom: 103px;
    left: -484px;
    li button {
      &:before {
        font-size: 13px;
        top: -4px;
        color: #fff;
        opacity: 0.4;
      }
    }
  }
  .slide-title {
    color: #fff;
    max-width: 589px;
    margin-bottom: 80px;
  }
  .slide-img {
    display: block;
    padding-top: 155px;
    padding-bottom: 238px;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .slick-arrow {
    bottom: 77px;
    background-color: rgba(255, 255, 255, 0.4);
    &.slick-next {
      right: 20.75%;
    }
    &.slick-prev {
      right: 23.9%;
    }
    &.slick-disabled {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
