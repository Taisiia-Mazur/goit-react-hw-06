import { FaPhone, FaUser } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p className={css.name}>
          <FaUser className={css.svg} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.svg} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
