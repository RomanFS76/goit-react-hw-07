import { Formik, Field, Form,ErrorMessage  } from "formik";
import React from "react";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const initialValues = { name: "", number: "" };
const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});

const ContactForm = () => {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
      })
    );
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label className={css.labelForm} htmlFor={`${id}-name`}>Name</label>
        <Field className={css.inputName} type="text" name="name" id={`${id}-name`} />
        <ErrorMessage name="name" component="span" />
        <label className={css.labelForm} htmlFor={`${id}-number`}>Number</label>
        <Field type="text" name="number" id={`${id}-number`} />
        <ErrorMessage name="number" component="span" />
        <button className={css.btnSubmit} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// return (
//   <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
//     <Form className={css.form}>

//       <label htmlFor={nameFieldId} className={css.labelForm}>Name</label>

//       <Field type="text" name="name" id={nameFieldId} className={css.fieldForm}/>
//       <ErrorMessage name="name" component="span" />

//       <label htmlFor={numberFieldId} className={css.labelForm}>Number</label>

//       <Field type="text" name="number" id={numberFieldId} className={css.fieldForm}/>
//       <ErrorMessage name="number" component="span" />

//       <button type="submit" className={css.btnSubmit}>Add Contact</button>

//     </Form>
//   </Formik>
// );
// };
