import { Dropdown as DP } from "antd";
import clsx from "clsx";
import { Icons } from "@/constants";
import { Button } from "@/components/";
import styles from "./Dropdown.module.css";

export const Dropdown = ({
  onClick,
  dropdownMenu,
  children,
  className,
  rootClassName,
  placement,
  trigger,
  expandIcon,
  ...rest
}) => {
  return (
    <DP
      menu={{
        items: dropdownMenu,
        expandIcon: expandIcon ? expandIcon : Icons.DropdownArrowRight,
        onClick: onClick,
        className: styles.dropdownMenu,
        rootClassName: styles.dropdownSubMenu,
      }}
      trigger={trigger}
      className={className}
      rootClassName={clsx(styles.dropdown, rootClassName)}
      {...rest}
      placement={placement}
    >
      <Button>{children}</Button>
    </DP>
  );
};
