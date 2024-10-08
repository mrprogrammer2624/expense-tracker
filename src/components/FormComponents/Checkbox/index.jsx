import { Checkbox as CB } from "antd";
import clsx from "clsx";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  value,
  onChange,
  disabled,
  className,
  children,
  checked,
  id,
  name,
  ...rest
}) => {
  return (
    <CB
      value={value}
      onChange={onChange}
      className={clsx(styles.CheckBox, className)}
      disabled={disabled}
      id={id}
      name={name}
      checked={checked}
      {...rest}
    >
      {children}
    </CB>
  );
};
