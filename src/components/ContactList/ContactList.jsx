import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectContacts, selectVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((el) => {
        return (
          <li key={el.id} className={css.contactItem}>
            <Contact name={el.name} number={el.number} id={el.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
