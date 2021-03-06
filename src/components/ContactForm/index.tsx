import React from "react";
import * as Yup from "yup";
import { styled } from "../../config/theme";
import { Formik } from "formik";
import { TextArea } from "../../components/ui-components/TextArea";
import { Button } from "../../components/ui-components/Button";
import { FormGroup } from "../../components/ui-components/FormGroup";
import { Input } from "../../components/ui-components/Input";
import { media } from "../../config/media";

type InitialFormValues = {
  text: string;
  firstName: string;
  lastName: string;
};

interface Props {
  className?: string;
  initialValues?: InitialFormValues;
}

const ContactFormComponent: React.FC<Props> = ({
  className,
  initialValues = { text: "", firstName: "", lastName: "" },
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .max(20, "Слишком длинное имя")
          .matches(/^[a-zа-яё]+$/i, "Имя не должно содержать цифры")
          .required("Введите имя"),
        lastName: Yup.string()
          .max(20, "Слишком длинная фамилия")
          .matches(/^[a-zа-яё]+$/i, "Фамилия не должна содержать цифры")
          .required("Введите фамилию"),
        text: Yup.string()
          .max(100, "Слишком длинное сообщение")
          .required("Введите сообщение"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => {
        const { errors: formikErrors, handleSubmit, touched } = props;

        return (
          <form onSubmit={handleSubmit} className={className}>
            <div className="form-row">
              <FormGroup error={touched.firstName && formikErrors.firstName}>
                <Input
                  type="text"
                  name="firstName"
                  label="Имя"
                  placeholder="Иван"
                />
              </FormGroup>

              <FormGroup error={touched.lastName && formikErrors.lastName}>
                <Input
                  type="text"
                  name="lastName"
                  label="Фамилия"
                  placeholder="Иванов"
                />
              </FormGroup>
            </div>
            <FormGroup error={touched.text && formikErrors.text}>
              <TextArea
                name="text"
                label="Сообщение"
                placeholder="Ваше сообщение"
              />
            </FormGroup>

            <Button type="submit" className="form-button">
              Отправить сообщение
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export const ContactForm = styled(ContactFormComponent)`
  max-width: 540px;
  width: 100%;
  padding-top: 14px;
  ${media.desktopSm`
      margin: 0 auto;
  `}
  .form-row {
    display: flex;
    justify-content: space-between;
    border: none;
    padding: 0;
    margin: 0;
    .form-group {
      width: 255px;
      ${media.tabletPortrait`
      width: 100%;
      max-width: 320px;
    `}
    }
    ${media.tabletPortrait`
      flex-direction: column;
  `}
  }
  .form-button {
    margin-left: auto;
    margin-top: 42px;
    ${media.desktopSm`
      margin-right: auto;
  `}
  }
`;
