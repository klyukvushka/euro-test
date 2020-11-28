import React from "react";
import { Spec } from "../../components/Spec";
import { Container, H2, Subtitle } from "../../components/styled";
import { styled } from "../../config/theme";

type Props = {
  className?: string;
};

const H1 = styled(H2).attrs({
  as: "h1",
})``;

const SpecialSectionComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className} id="services">
      <Container>
        <H1>Наши услуги</H1>
        <Subtitle>Мы специализируемся</Subtitle>

        <div className="services">
          <Spec text="Бухгалтерское обслуживание" />
          <Spec text="Бухгалтерское обслуживание" />
          <Spec text="Бухгалтерское обслуживание" />
          <Spec text="Бухгалтерское обслуживание" />
          <Spec text="Бухгалтерское обслуживание" />
          <Spec text="Бухгалтерское обслуживание" />
        </div>
      </Container>
    </section>
  );
};

export const SpecialSection = styled(SpecialSectionComponent)`
  background: ${(props) => props.theme.colors.grey};
  padding: 137px 0 101px 0;
  .services {
    margin-top: 83px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
