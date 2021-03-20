import Meta from "../components/Layout/components/Meta";
import styles from "../styles/Contact/Contact.module.scss";
import Form from "../components/Contact/Form";

const contact = () => {
  return (
    <div className={`${styles.Contact} grid spacing`}>
      <Meta title="Contact - My blog" />
      <h1 className="title">Contact</h1>
      <h3 className="subtitle">
        Contact me with any question you might have, or simply to get in touch.
      </h3>
      <Form />
    </div>
  );
};

export default contact;
