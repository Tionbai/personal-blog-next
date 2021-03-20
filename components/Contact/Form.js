import React from "react";
import styles from "../../styles/Contact/Form.module.scss";
import { personIcon, mailIcon, messageIcon } from "../Icons";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__inputs}>
        <label className={styles.form__input}>
          {personIcon}
          <input
            placeholder="Name"
            className={`${styles.form__input__textarea} text`}
          />
        </label>
        <label className={styles.form__input}>
          {mailIcon}
          <input
            placeholder="Email"
            className={`${styles.form__input__textarea} text`}
          />
        </label>
        <label className={styles.form__input}>
          {messageIcon}
          <textarea
            placeholder="Message"
            className={`${styles.form__input__textarea} textarea text`}
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
