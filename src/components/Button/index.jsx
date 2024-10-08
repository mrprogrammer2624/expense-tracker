import { Button as Btn } from "antd";
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({
  size,
  type,
  icon,
  className,
  children,
  onClick,
  id,
  name,
  variant,
  shape,
  ...rest
}) => {
  return (
    <Btn
      id={id}
      name={name}
      shape={shape}
      size={size}
      icon={icon}
      htmlType={type}
      type={variant}
      onClick={onClick}
      className={clsx(styles.Button, className)}
      {...rest}
    >
      {children}
    </Btn>
  );
};
