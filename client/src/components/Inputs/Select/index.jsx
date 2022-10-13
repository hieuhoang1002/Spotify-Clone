import styles from "./styles.module.scss";

const Select = ({ label, options, placeholder, ...rest }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <select {...rest} className={styles.select}>
        <option style={{ display: "none" }} value="">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
