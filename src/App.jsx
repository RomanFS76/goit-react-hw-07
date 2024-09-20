import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/selectors";


function App() {
  const dispatch = useDispatch();
  // const {loading,error} = useSelector(getInitialState);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  console.log(loading);
  console.log(error)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Oops error!!!! </p>}
      <ContactList />

    </>
  );
}

export default App;
