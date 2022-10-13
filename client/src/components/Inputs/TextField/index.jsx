import styles from "./styles.module.scss";

const TextField = ({ label, placeholder, type, options }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <input placeholder={placeholder} type={type} options={options} />
    </div>
  );
};

export default TextField;
