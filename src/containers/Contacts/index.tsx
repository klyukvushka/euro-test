import React from "react";
import { MailIcon, PhoneIcon } from "../../components/Icons";
import { Container, Subtitle } from "../../components/styled";
import { styled } from "../../config/theme";
import con from "../../images/cont.png";
import { ContactForm } from "../ContactForm";

type Props = {
  className?: string;
};

const ContactsComponent: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
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
  padding: 122px 0 140px 0;
  color: #fff;
  background-image: url(${con});
  background-repeat: no-repeat;
  background-position: center;
  .contacts-subtitle {
    color: #fff;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .text {
    margin-top: 60px;
    margin-bottom: 80px;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    width: 445px;
  }
  .container {
    display: flex;
  }
  .links {
    display: flex;
    &__item {
      display: inline-flex;
      align-items: center;
      &:first-child {
        margin-right: 40px;
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
