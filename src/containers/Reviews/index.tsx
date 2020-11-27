import React from "react";
import { Carousel } from "../../components/Carousel";
import { Case } from "../../components/Case";
import { Container, H2, Subtitle } from "../../components/styled";
import { styled } from "../../config/theme";

type Props = {
  className?: string;
};

const ReviewsSectionComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <H2>Отзывы</H2>
        <Subtitle>Ваши благодарности</Subtitle>

        <Carousel />
      </Container>
    </section>
  );
};

export const ReviewsSection = styled(ReviewsSectionComponent)`
  padding: 140px 0 110px 0;
`;
