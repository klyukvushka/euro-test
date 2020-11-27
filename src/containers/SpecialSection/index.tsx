import React from "react";
import { Spec } from "../../components/Spec";
import { Container, H2, Subtitle } from "../../components/styled";
import { styled } from "../../config/theme";

type Props = {
  className?: string;
};

const SpecialSectionComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <H2>Наши услуги</H2>
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
  padding: 140px 0 110px 0;
  .services {
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
