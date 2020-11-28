import React from "react";
import { Case } from "../../components/Case";
import { Container, H2, Subtitle } from "../../components/styled";
import { media } from "../../config/media";
import { styled } from "../../config/theme";

type Props = {
  className?: string;
};

const AboutSectionComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className} id="about">
      <Container className="container">
        <div className="text-wrapper">
          <H2>О нас</H2>
          <Subtitle>
            Компания
            <br />
            <span>ИвановПром</span>
          </Subtitle>

          <p className="text">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
        </div>
        <div className="cases">
          <Case num={90} text="Завершено крупных сделок" />
          <Case num={90} text="Завершено крупных сделок" />
          <Case num={90} text="Завершено крупных сделок" />
          <Case num={90} text="Завершено крупных сделок" />
        </div>
      </Container>
    </section>
  );
};

export const AboutSection = styled(AboutSectionComponent)`
  padding: 137px 0 105px 0;
  ${media.desktopMini`
    padding-top: 90px;
  `}
  ${media.tabletL`
    padding: 70px 0;
  `}
  ${media.phone`
    padding: 50px 0;
  `}
  .text {
    margin-top: 40px;
    width: 445px;
    ${media.desktopMini`
      width: 100%;
  `}
  }
  .container {
    display: flex;
    ${media.desktopMini`
      flex-direction: column;
  `}
  }
  .cases {
    margin-left: 117px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 24px;
    ${media.desktopMini`
      padding-top: 40px;
      margin: 0 auto;
      width: 70%
  `}
    ${media.tablet`
      width: 100%;
      justify-content: center;
  `}
  }
`;
