import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const visibleUser = contacts.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleUser.map((el) => {
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
