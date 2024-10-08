import { Input as AntdInput } from "antd";
import clsx from "clsx";
import styles from "./Input.module.css";
import { Icons } from "@/constants";

export const Input = ({
  id,
  name,
  size,
  type = "text",
  label,
  value,
  suffix,
  prefix,
  onChange,
  disabled,
  isInvalid,
  allowClear = false,
  placeholder,
  errorMessage,
  parentClassName,
  labelClassName,
  rootClassName,
  ...rest
}) => {
  return (
    <div className={clsx(parentClassName, "position-relative")}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName, "")}>
          {label}
        </label>
      )}
      <AntdInput
        id={id}
        name={name}
        type={type}
        size={size}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(styles.inputWrap, rootClassName)}
        status={isInvalid && "error"}
        prefix={prefix}
        suffix={suffix}
        allowClear={allowClear}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};

export const PasswordInput = ({
  id,
  size,
  label,
  value,
  suffix,
  prefix,
  onChange,
  disabled,
  isInvalid,
  className,
  placeholder,
  errorMessage,
  parentClassName,
  labelClassName,
  rootClassName,
  ...rest
}) => {
  const finalClassName = {
    input: clsx(styles.input, className),
  };
  return (
    <div className={clsx(parentClassName, "position-relative")}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.label, labelClassName, "position-absolute")}
        >
          {label}
        </label>
      )}
      <AntdInput.Password
        className={clsx(styles.inputWrap, rootClassName)}
        id={id}
        size={size}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        classNames={finalClassName}
        status={isInvalid && "error"}
        prefix={prefix}
        suffix={suffix}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};

export const InputOtp = ({
  id,
  size,
  value,
  onChange,
  disabled,
  isInvalid,
  formatter,
  placeholder,
  errorMessage,
  className,
  defaultValue,
  mask,
  ...rest
}) => {
  return (
    <div className={clsx(styles.inputOtp, className, "position-relative")}>
      <AntdInput.OTP
        id={id}
        size={size}
        formatter={formatter}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        status={isInvalid && "error"}
        mask={mask}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};

const { TextArea } = AntdInput;
export const TextAreas = ({
  id,
  label,
  value,
  suffix,
  prefix,
  autoSize,
  onChange,
  disabled,
  isInvalid,
  className,
  rows = 5,
  allowClear = true,
  placeholder,
  errorMessage,
  parentClassName,
  labelClassName,
  ...rest
}) => {
  return (
    <div className={clsx(parentClassName)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}
      <TextArea
        placeholder={placeholder}
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={clsx(styles.input, styles.textArea, className)}
        status={isInvalid && "error"}
        prefix={prefix}
        suffix={suffix}
        autoSize={autoSize}
        minLength={5}
        rows={rows}
        allowClear={
          allowClear && {
            clearIcon: (
              <span className="clr-black d-flex"> {Icons.CloseCircle} </span>
            ),
          }
        }
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};
