import React from "react";
import { MailIcon, PhoneIcon } from "../../components/Icons";
import { Container, Subtitle } from "../../components/styled";
import { media } from "../../config/media";
import { styled } from "../../config/theme";
import con from "../../images/cont.png";
import { ContactForm } from "../ContactForm";

type Props = {
  className?: string;
};

const ContactsComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className} id="contacts">
      <Container className="container">
        <div className="wrapper">
          <Subtitle className="contacts-subtitle">Связь с нами</Subtitle>
          <p className="text">
            У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
          </p>

          <div className="links">
            <a href="tel:+7-111-222-33-44" className="links__item">
              <PhoneIcon width={17} height={30} />
              <span>+7 (111) 222-33-44</span>
            </a>

            <a href="mailto:order@bu-one.ru" className="links__item">
              <MailIcon width={39} height={30} />
              <span>order@bu-one.ru</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
};

export const Contacts = styled(ContactsComponent)`
  padding: 117px 0 139px 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  background-image: url(${con});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  ${media.desktopMini`
    padding-top: 90px;
  `}
  ${media.tabletL`
    padding: 70px 0;
  `}
  ${media.phone`
    padding: 50px 0;
  `}
  .contacts-subtitle {
    color: #fff;
  }
  .container {
    display: flex;
    justify-content: space-between;
    ${media.desktopMini`
      flex-direction: column;
  `}
  }
  .text {
    margin-top: 40px;
    margin-bottom: 72px;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    width: 445px;
    ${media.desktopMini`
      width: 100%;
      text-align: center;
  `}
    ${media.phone`
      margin-bottom: 40px;
  `}
  }
  .links {
    display: flex;
    ${media.desktopMini`
      justify-content: center;
      margin-bottom: 30px;
  `}
    ${media.phone`
      flex-direction: column;
      align-items: center;
  `}
    &__item {
      display: inline-flex;
      align-items: center;
      &:first-child {
        margin-right: 40px;
        ${media.phone`
          margin-right: 0;
          margin-bottom: 15px;
        `}
      }
      svg {
        path {
          fill: #fff;
        }
      }
      span {
        margin-left: 15px;
        color: #fff;
        font-size: 21px;
        line-height: 29px;
      }
    }
  }
`;
