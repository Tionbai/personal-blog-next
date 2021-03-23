import React from "react";

const FormInput = ({ styles, icon, placeholder }) => {
  return (
    <label className={styles.form__input}>
      {icon}
      <input
        placeholder={placeholder}
        className={`${styles.form__input__textarea} text`}
      />
    </label>
  );
};

export default FormInput;
