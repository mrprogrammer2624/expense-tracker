import { Modal as AntModal } from "antd";
import { clsx } from "clsx";
import { Icons } from "@/constants";
import { Button } from "@/components";
import styles from "./Modal.module.css";

export const Modal = ({
  open,
  title,
  width,
  children,
  className,
  handleClose,
  handleOk,
  contentClassName,
  closeOnOutsideClick,
  handleCancel,
  handleContent,
  IsCloseIcon = false,
  IsFooter = false,
  ...rest
}) => {
  const finalClassName = {
    body: styles.body,
    content: clsx(styles.content, contentClassName),
    header: styles.header,
    footer: styles.footer,
    mask: styles.mask,
  };

  return (
    <AntModal
      classNames={finalClassName}
      rootClassName={styles.modalParent}
      open={open}
      className={clsx(styles.modal, className)}
      title={title}
      onCancel={handleCancel}
      maskClosable={closeOnOutsideClick}
      width={width}
      footer={
        IsFooter &&
        (() => (
          <div className="d-flex align-items-center gap-xl justify-content-center">
            <Button block onClick={handleClose}>
              Cancel
            </Button>
            <Button block variant={"primary"} onClick={handleOk}>
              {handleContent}
            </Button>
          </div>
        ))
      }
      closeIcon={
        IsCloseIcon && (
          <div
            className={clsx(
              styles.closeBtn,
              "clr-black d-flex align-items-center"
            )}
          >
            {Icons.CloseCircle}
          </div>
        )
      }
      centered
      {...rest}
    >
      {children}
    </AntModal>
  );
};
