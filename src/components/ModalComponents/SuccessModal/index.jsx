import { Modal } from "@/components";
import { Icons } from "@/constants";
import styles from "./SuccessModal.module.css";

export const MBSuccessModal = ({ open, handleClose }) => {
  return (
    <Modal width="400px" open={open} onCancel={handleClose}>
      <span className={styles.successIcon}>{Icons.AllEmployees}</span>
      <h2 className="fw-semibold text-center mb-2 lh-1">Successful</h2>
      <h5 className="text-center clr-gray fw-normal">
        Your request for demo has been successfully sent. Someone from our team
        will be in touch with you shortly.
      </h5>
    </Modal>
  );
};
