import React from "react";
import { Spec } from "../../components/Spec";
import { Container } from "../../components/ui-components/Container";
import { H2 } from "../../components/ui-components/Title";
import { Subtitle } from "../../components/ui-components/Subtitle";
import { media } from "../../config/media";
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
  ${media.desktopSm`
    padding-top: 90px;
  `}
  ${media.tabletLandscape`
    padding: 70px 0;
  `}
    ${media.phone`
    padding: 50px 0;
  `}
  .services {
    margin-top: 83px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${media.tabletLandscape`
      margin: 0 auto;
      margin-top: 40px;
      width: 70%;
  `}
    ${media.tabletPortrait`
      width: 100%;
      align-items: center;
      justify-content: center;
  `}
  }
`;
