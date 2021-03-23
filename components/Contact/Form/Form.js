import React from "react";
import styles from "../../../styles/Contact/Form.module.scss";
import FormInput from "./components/FormInput";
import { personIcon, mailIcon, messageIcon, sendIcon } from "../../Icons";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__inputs}>
        <FormInput styles={styles} icon={personIcon} placeholder="Name" />
        <FormInput styles={styles} icon={mailIcon} placeholder="Email" />
        <label className={styles.form__input}>
          {messageIcon}
          <textarea
            placeholder="Message"
            className={`${styles.form__input__textarea} textarea text`}
          />
        </label>
      </div>
      <button
        className={`${styles.form__button} text`}
        type="submit"
        onClick={handleSubmit}
      >
        <span className={`${styles.form__button__content}`}>
          <span className={`${styles.form__button__content__label}`}>
            Send message
          </span>
          {sendIcon}
        </span>
      </button>
    </form>
  );
};

export default Form;
