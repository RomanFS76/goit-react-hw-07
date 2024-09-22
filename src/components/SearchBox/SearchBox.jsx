import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";


const SearchBox = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectNameFilter);

  return (
    <>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={name}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};

export default SearchBox;
