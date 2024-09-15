import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";
import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const inputId = useId();
  const onChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
        id={inputId}
      />
    </div>
  );
}
