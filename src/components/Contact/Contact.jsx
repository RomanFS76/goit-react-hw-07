
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({name,number,id}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.wrapperContact}>
        <p className={css.contactText}>
          <FaUser className={css.icon} />
          {name}
        </p>
  
        <p className={css.contactText}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
  
        <button type="button" className={css.btnDelete} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;



