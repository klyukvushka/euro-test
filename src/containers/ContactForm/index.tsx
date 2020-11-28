import React from "react";
import * as Yup from "yup";
import { styled } from "../../config/theme";
import { Formik } from "formik";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { FormGroup } from "../../components/FormGroup";
import { Input } from "../../components/Input";

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
      {(props: any) => {
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

            <Button
              type="submit"
              text="Отправить сообщение"
              className="form-button"
            />
          </form>
        );
      }}
    </Formik>
  );
};

export const ContactForm = styled(ContactFormComponent)`
  width: 540px;
  padding-top: 14px;
  .form-row {
    display: flex;
    justify-content: space-between;
    border: none;
    padding: 0;
    margin: 0;
    .form-group {
      width: 255px;
    }
  }

  .form-button {
    margin-left: auto;
    margin-top: 42px;
  }
`;
