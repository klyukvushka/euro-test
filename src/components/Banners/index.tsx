import React from "react";
import { Button } from "../../components/ui-components/Button";
import { Carousel } from "../../components/ui-components/Carousel";
import { Container } from "../../components/ui-components/Container";
import { Subtitle } from "../../components/ui-components/Subtitle";
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
              <Button type="button">Наша перезентация</Button>
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
    left: -482px;
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
    margin-bottom: 62px;
  }
  .slide-img {
    display: block;
    padding-top: 163px;
    padding-bottom: 240px;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .slick-arrow {
    bottom: 80px;
    background-color: rgba(255, 255, 255, 0.4);
    &.slick-next {
      right: 21.1%;
    }
    &.slick-prev {
      right: 24.3%;
    }
    &.slick-disabled {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
