import React from "react";
import { Carousel } from "../../components/Carousel";
import { Container, H2, Subtitle } from "../../components/styled";
import { media } from "../../config/media";
import { styled } from "../../config/theme";
import ms from "../../images/ms.png";

type Props = {
  className?: string;
};

const fakedata = [
  {
    id: 1,
    src: `${ms}`,
    desc: "microsoft",
  },
  {
    id: 2,
    src: `${ms}`,
    desc: "microsoft",
  },
  {
    id: 3,
    src: `${ms}`,
    desc: "microsoft",
  },
  {
    id: 4,
    src: `${ms}`,
    desc: "microsoft",
  },
  {
    id: 5,
    src: `${ms}`,
    desc: "microsoft",
  },
  {
    id: 6,
    src: `${ms}`,
    desc: "microsoft",
  },
];

const ClientsSectionComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className} id="clients">
      <Container>
        <H2>Наши клиенты</H2>
        <Subtitle>С нами работают</Subtitle>

        <Carousel
          className="carousel"
          slide={4}
          responsive={[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {fakedata.map((item: { id: number; src: string; desc: string }) => (
            <img key={item.id} src={item.src} alt={item.desc} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export const ClientsSection = styled(ClientsSectionComponent)`
  padding: 95px 0 204px 0;
  background: ${(props) => props.theme.colors.grey};
  ${media.tabletL`
    padding: 70px 0 170px 0;
  `}
  .carousel {
    margin-top: 65px;
    ${media.tabletL`
      margin-top: 40px;
  `}
    .slick-slide {
      padding-right: 30px;
    }
  }
`;
