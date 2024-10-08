import { DatePicker as DP } from "antd";
import clsx from "clsx";
import styles from "./DatePicker.module.css";

export const DatePicker = ({
  id,
  value,
  label,
  format,
  onChange,
  isInvalid,
  placeholder,
  errorMessage,
  name,
  suffix = false,
  allowClear = true,
  parentClassName,
  ...rest
}) => {
  return (
    <div className={clsx(styles.datepickerWrap, parentClassName)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <DP
        id={id}
        name={name}
        value={value}
        format={format}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.datepicker}
        status={isInvalid && "error"}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};
