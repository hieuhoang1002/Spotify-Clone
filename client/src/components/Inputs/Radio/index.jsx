import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./styles.module.scss";

const RadioInput = ({
  name,

  label,
  options,
  required,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      <p>{label}</p>
      <RadioGroup {...rest} row name={name}>
        {options.map((option, index) => (
          <FormControlLabel
            className={styles.radio_input}
            key={index}
            value={option}
            control={
              <Radio
                className={styles.radio_icon}
                disableRipple
                required={required}
              />
            }
            label={option}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioInput;
