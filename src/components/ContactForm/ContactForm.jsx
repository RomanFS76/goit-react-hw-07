import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContacts } from "../../redux/contactsOps";

const initialValues = { name: "", number: "" };
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(addContacts(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.labelForm} htmlFor={`${id}-name`}>
          Name
        </label>
        <Field
          className={css.inputName}
          type="text"
          name="name"
          id={`${id}-name`}
        />
        <ErrorMessage name="name" component="span" />
        <label className={css.labelForm} htmlFor={`${id}-phone`}>
          Phone
        </label>
        <Field type="text" name="phone" id={`${id}-phone`} />
        <ErrorMessage name="phone" component="span" />
        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
